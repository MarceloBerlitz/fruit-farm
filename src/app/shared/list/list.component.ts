import { Component, OnInit, Input } from '@angular/core';

import { ListItemModel } from '../list-item/list-item.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input()
  public items: ListItemModel[];

  constructor() { }

  ngOnInit(): void {
  }

}
