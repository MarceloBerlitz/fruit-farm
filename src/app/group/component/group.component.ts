import { Component, OnInit } from '@angular/core';
import { GroupService } from '../service/group.service';
import { ListItemModel } from 'src/app/shared/list-item/list-item.model';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {

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
