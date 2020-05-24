import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
    private cropService: CropService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.treeService.get(this.route.snapshot.paramMap.get('id'))
      .pipe(
        tap(res => {
          this.tree = {
            title: res.species ? res.species.description : 'Espécie excluída',
            text: res.description,
            footer: res.date,
            value: res._id
          }
        }),
        switchMap(res => forkJoin(
          this.groupService.getByTree(res._id),
          this.cropService.getByTree(res._id)
        ))
      ).subscribe(res => {
        const [ g, c ] = res;
        this.groups = g.map(group => (
          {
            text: group.description,
            title: group.name
          })
        );
        this.crops = c.map(crop => ({
          title: `${crop.tree.description} - ${crop.date}`,
          text: crop.info ? crop.info[0] : '',
          footer: `${crop.grossWeight}kg`
        }))
      }, err => {
      })
  }

  public deleteTree(): void {
    if(confirm(`Deseja mesmo excluir a árvore ${this.tree.text}?`)) {
      this.treeService.delete(this.tree.value)
        .subscribe(res => {
        alert('Árvore excluída com sucesso.');
        this.router.navigate(['arvores']);
      }, res => alert(JSON.stringify(res)));
    }
  }

  public editTree(): void {
    this.router.navigate([`arvores/${this.tree.value}/editar`]);
  }

}
