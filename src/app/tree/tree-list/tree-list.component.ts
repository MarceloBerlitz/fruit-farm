import { Component, OnInit } from '@angular/core';

import { ListItemModel } from 'src/app/shared/list-item/list-item.model';
import { TreeService } from 'src/app/core/tree/tree.service';

@Component({
  selector: 'app-tree-list',
  templateUrl: './tree-list.component.html',
  styleUrls: ['./tree-list.component.css', '../../shared/style/style.css']
})
export class TreeListComponent implements OnInit {

  public treeList: ListItemModel[] = [];

  constructor(
    private service: TreeService
  ) { }

  ngOnInit(): void {
    this.service.getAll().subscribe(res => {
      this.treeList = res.map(r => ({
          text: r.species.description,
          title: r.description,
          footer: r.date,
          link: `/arvores/${r._id}`
        }));
    });
  }

}
