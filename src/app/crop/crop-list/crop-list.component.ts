import { Component, OnInit } from '@angular/core';

import { CropService } from 'src/app/core/crop/crop.service';
import { ListItemModel } from 'src/app/shared/list-item/list-item.model';

@Component({
  selector: 'app-crop-list',
  templateUrl: './crop-list.component.html',
  styleUrls: ['./crop-list.component.css', '../../shared/style/style.css']
})
export class CropListComponent implements OnInit {

  public crops: ListItemModel[];

  constructor(
    private service: CropService
  ) { }

  ngOnInit(): void {
    this.service.getAll()
      .subscribe(res => {
        this.crops = res.map(r => ({
          title: `${r.tree ? r.tree.description : 'Árvore excluída'} - ${r.date}`,
          text: r.info ? r.info[0] : '',
          footer: `${r.grossWeight}kg`,
          link: `colheitas/${r._id}`
        }))
      })
  }

}
