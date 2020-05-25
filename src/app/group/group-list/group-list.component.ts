import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { tap, switchMap, catchError } from 'rxjs/operators';

import { GroupService } from '../../core/group/group.service';
import { ListItemModel } from 'src/app/shared/list-item/list-item.model';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.css', '../../shared/style/style.css']
})
export class GroupListComponent implements OnInit {

  public loading: boolean = false;
  public groupList: ListItemModel[] = [];

  constructor(
    private service: GroupService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    of(null)
      .pipe(
        tap(() => { this.loading = true }),
        switchMap(() => this.service.getAll()),
        tap(res => {
          this.groupList = res.map(r => ({
              title: r.name,
              text: r.description,
              link: `/grupos/${r._id}`
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
