import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { switchMap, tap } from 'rxjs/operators';
import { forkJoin } from 'rxjs'
import { ToastrService } from 'ngx-toastr';

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
    private router: Router,
    private groupService: GroupService,
    private treeService: TreeService,
    private cropService: CropService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.groupService.get(this.route.snapshot.paramMap.get('id'))
    .pipe(
      tap(res => {
        this.group = {
          title: res.name,
          text: res.description,
          value: res._id
        };
      }),
      switchMap(res => forkJoin(
        this.treeService.getByGroup(res._id),
        this.cropService.getByGroup(res._id)
        )))
      .subscribe(res => {
        const [ t, c ] = res;
        this.trees = t.map(tree => ({
          title: `${tree.species.description} - ${tree.description}`,
          footer: tree.date
        }));
        this.crops = c.map(crop => ({
          title: `${crop.tree ? crop.tree.description : 'Árvore excluída'} - ${crop.date}`,
          text: crop.info ? crop.info[0] : '',
          footer: `${crop.grossWeight}kg`
        }));
      }, err => {
        this.toastr.error(JSON.stringify(err));
      });
  }

  public deleteGroup(): void {
    if(confirm(`Deseja mesmo excluir o grupo ${this.group.title}?`)) {
      this.groupService.delete(this.group.value)
        .subscribe(res => {
          this.toastr.success('Grupo excluído com sucesso.');
          this.router.navigate(['/grupos']);
        }, res => this.toastr.error(JSON.stringify(res)));
    }
  }

  public editGroup(): void {
    this.router.navigate([`grupos/${this.group.value}/editar`])
  }

}
