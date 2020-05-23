import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { forkJoin } from 'rxjs';

import { TreeService } from 'src/app/core/tree/tree.service';
import { GroupService } from 'src/app/core/group/group.service';
import { CropService } from 'src/app/core/crop/crop.service';
import { ListItemModel } from 'src/app/shared/list-item/list-item.model';

@Component({
  selector: 'app-tree-details',
  templateUrl: './tree-details.component.html',
  styleUrls: ['./tree-details.component.css', '../../shared/style/style.css']
})
export class TreeDetailsComponent implements OnInit {

  public tree: ListItemModel;
  public groups: ListItemModel[];
  public crops: ListItemModel[];

  constructor(
    private route: ActivatedRoute,
    private treeService: TreeService,
    private groupService: GroupService,
    private cropService: CropService
  ) { }

  ngOnInit(): void {
    this.treeService.get(this.route.snapshot.paramMap.get('id'))
      .pipe(
        tap(res => {
          this.tree = {
            image: '/assets/macieira.jpg',
            title: res.species.description,
            text: res.description,
            footer: res.date
          }
        }),
        switchMap(res => forkJoin(
          this.groupService.getAll(res._id),
          this.cropService.getAll('', res._id)
        ))
      ).subscribe(res => {
        const [ g, c ] = res;
        this.groups = g.map(group => (
          {
            image: '/assets/macieira.jpg',
            text: group.description,
            title: group.name
          })
        );
        this.crops = c.map(crop => ({
          image: '/assets/macieira.jpg',
          title: `${crop.tree.description} - ${crop.date}`,
          text: crop.info.reduce((acc, cur) => `${cur} ${acc}`, ''),
          footer: `${crop.grossWeight}kg`
        }))
      }, err => {
      })
  }

  public deleteTree(): void {

  }

}
