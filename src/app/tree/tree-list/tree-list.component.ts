import { Component, OnInit } from '@angular/core';

import { ListItemModel } from 'src/app/shared/list-item/list-item.model';
import { TreeService } from 'src/app/core/tree/tree.service';
import { of } from 'rxjs';
import { tap, switchMap, catchError } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-tree-list',
  templateUrl: './tree-list.component.html',
  styleUrls: ['./tree-list.component.css', '../../shared/style/style.css']
})
export class TreeListComponent implements OnInit {

  public loading: boolean;
  public treeList: ListItemModel[] = [];

  constructor(
    private service: TreeService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    of(null).pipe(
      tap(() => { this.loading = true }),
      switchMap(() => this.service.getAll()),
      tap(res => {
        this.treeList = res.map(r => ({
            text: r.species ? r.species.description : 'Espécie excluída',
            title: r.description,
            footer: r.date,
            link: `/arvores/${r._id}`
          }));
      }),
      catchError(err => {
        this.toastr.error(JSON.stringify(err));
        return of(null);
      })
    )
    .subscribe(() => { this.loading = false; });
  }

}
