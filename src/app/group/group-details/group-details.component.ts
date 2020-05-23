import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { switchMap, tap } from 'rxjs/operators';
import { forkJoin } from 'rxjs'

import { GroupService } from 'src/app/core/group/group.service';
import { ListItemModel } from 'src/app/shared/list-item/list-item.model';
import { TreeService } from 'src/app/core/tree/tree.service';
import { CropService } from 'src/app/core/crop/crop.service';

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
    private groupService: GroupService,
    private treeService: TreeService,
    private cropService: CropService
  ) { }

  ngOnInit(): void {
    this.groupService.get(this.route.snapshot.paramMap.get('id'))
    .pipe(
      tap(res => {
        this.group = {
          image: '/assets/macieira.jpg',
          title: res.name,
          text: res.description
        };
      }),
      switchMap(res => forkJoin(
        this.treeService.getAll(res._id),
        this.cropService.getAll(res._id)
        )))
      .subscribe(res => {
        const [ t, c ] = res;
        this.trees = t.map(tree => ({
          image: '/assets/macieira.jpg',
          title: `${tree.species.description} - ${tree.description}`,
          footer: tree.date
        }));
        this.crops = c.map(crop => ({
          image: '/assets/macieira.jpg',
          title: `${crop.tree.description} - ${crop.date}`,
          text: crop.info.reduce((acc, cur) => `${cur} ${acc}`, ''),
          footer: `${crop.grossWeight}kg`
        }));
      }, alert);
  }

}
