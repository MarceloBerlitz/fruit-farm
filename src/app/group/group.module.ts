import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { GroupListComponent } from './group-list/group-list.component';
import { SharedModule } from '../shared/shared.module';
import { GroupService } from './service/group.service';
import { GroupCreateComponent } from './group-create/group-create.component';

@NgModule({
  declarations: [
    GroupListComponent,
    GroupCreateComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule,
  ],
  providers: [
    GroupService
  ]
})
export class GroupModule { }
