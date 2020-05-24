import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { GroupListComponent } from './group-list/group-list.component';
import { SharedModule } from '../shared/shared.module';
import { GroupCreateComponent } from './group-create/group-create.component';
import { CoreModule } from '../core/core.module';
import { GroupDetailsComponent } from './group-details/group-details.component';

@NgModule({
  declarations: [
    GroupListComponent,
    GroupCreateComponent,
    GroupDetailsComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class GroupModule { }
