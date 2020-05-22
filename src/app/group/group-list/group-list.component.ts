import { Component, OnInit } from '@angular/core';

import { GroupService } from '../../core/group/group.service';
import { ListItemModel } from 'src/app/shared/list-item/list-item.model';

@Component({
  selector: 'app-group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.css', '../../shared/style/style.css']
})
export class GroupListComponent implements OnInit {

  public groupList: ListItemModel[] = [];

  constructor(
    private service: GroupService
  ) { }

  ngOnInit(): void {
    this.service.getAll().subscribe(res => {
      this.groupList = res.map(r => ({
          image: '/assets/macieira.jpg',
          title: r.name,
          text: r.description
        }));
    });
  }
}
