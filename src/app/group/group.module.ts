import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { GroupListComponent } from './group-list/group-list.component';
import { SharedModule } from '../shared/shared.module';
import { GroupCreateComponent } from './group-create/group-create.component';
import { CoreModule } from '../core/core.module';
import { GroupDetailsComponent } from './group-details/group-details.component';
import { GroupEditComponent } from './group-edit/group-edit.component';

@NgModule({
  declarations: [
    GroupListComponent,
    GroupCreateComponent,
    GroupDetailsComponent,
    GroupEditComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class GroupModule { }
