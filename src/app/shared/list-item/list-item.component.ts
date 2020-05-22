import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { ListItemModel } from './list-item.model';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {

  @Input()
  public model: ListItemModel;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  public redirecionar() {
    console.log('mm', this.model.link)
    this.router.navigate([ this.model.link ]);
  }

}
