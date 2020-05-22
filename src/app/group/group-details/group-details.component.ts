import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GroupService } from 'src/app/core/group/group.service';
import { GroupDetailsResponse } from 'src/app/core/group/integration/response/group-details.response';
import { ListItemModel } from 'src/app/shared/list-item/list-item.model';

@Component({
  selector: 'app-group-details',
  templateUrl: './group-details.component.html',
  styleUrls: ['./group-details.component.css', '../../shared/style/style.css']
})
export class GroupDetailsComponent implements OnInit {

  public group: ListItemModel;
  public trees: ListItemModel[];
  public crops: ListItemModel[];

  constructor(
    private route: ActivatedRoute,
    private groupService: GroupService
  ) { }

  ngOnInit(): void {
    this.groupService.get(this.route.snapshot.paramMap.get('id'))
      .subscribe(res => {
          this.group = {
            image: '/assets/macieira.jpg',
            title: res.name,
            text: res.description
          };
          this.trees = res.trees.map(tree => ({
            image: '/assets/macieira.jpg',
            title: tree.description,
            footer: tree.date
          }));
          this.crops = res.crops.map(crop => ({
            image: '/assets/macieira.jpg',
            title: `${crop.grossWeight}kg - ${crop.date}`,
            text: crop.info.reduce((acc, cur) => `${cur} ${acc}`, '')
          }));
      }, alert)
  }

}
