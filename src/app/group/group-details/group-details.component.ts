import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { switchMap, tap } from 'rxjs/operators';
import { forkJoin, of } from 'rxjs'
import { ToastrService } from 'ngx-toastr';

import { GroupService } from 'src/app/core/group/group.service';
import { ListItemModel } from 'src/app/shared/list-item/list-item.model';
import { TreeService } from 'src/app/core/tree/tree.service';
import { CropService } from 'src/app/core/crop/crop.service';
import { CropListResponse } from 'src/app/core/crop/integration/response/crop-list.response';
import { TreeListResponse } from 'src/app/core/tree/integration/response/tree-list.response';
import { GroupDetailsResponse } from 'src/app/core/group/integration/response/group-details.response';

@Component({
  selector: 'app-group-details',
  templateUrl: './group-details.component.html',
  styleUrls: ['./group-details.component.css', '../../shared/style/style.css']
})
export class GroupDetailsComponent implements OnInit {

  public loading = {
    group: false,
    trees: false,
    crops: false
  }

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
    of(null)
      .pipe(
        tap(() => { for (let i in this.loading) { this.loading[i] = true } }),
        switchMap(() => this.groupService.get(this.route.snapshot.paramMap.get('id'))),
        tap(() => { this.loading.group = false; }),
        tap(res => { this.setGroup(res); }),
        switchMap(res => forkJoin(
          this.treeService.getByGroup(res._id).pipe(tap(() => { this.loading.trees = false; })),
          this.cropService.getByGroup(res._id).pipe(tap(() => { this.loading.crops = false; }))
        )))
      .subscribe(res => {
        const [t, c] = res;
        this.setTrees(t);
        this.setCrops(c);
      }, err => {
        this.toastr.error(JSON.stringify(err));
      });
  }

  private setCrops(c: CropListResponse[]) {
    this.crops = c.map(crop => ({
      title: `${crop.tree ? crop.tree.description : 'Árvore excluída'} - ${crop.date}`,
      text: crop.info ? crop.info[0] : '',
      footer: `${crop.grossWeight}kg`
    }));
  }

  private setTrees(t: TreeListResponse[]) {
    this.trees = t.map(tree => ({
      title: `${tree.species.description} - ${tree.description}`,
      footer: tree.date
    }));
  }

  private setGroup(res: GroupDetailsResponse) {
    this.group = {
      title: res.name,
      text: res.description,
      value: res._id
    };
  }

  public deleteGroup(): void {
    if (confirm(`Deseja mesmo excluir o grupo ${this.group.title}?`)) {
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
