import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { GroupListComponent } from './group-list/group-list.component';
import { SharedModule } from '../shared/shared.module';
import { GroupCreateComponent } from './group-create/group-create.component';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [
    GroupListComponent,
    GroupCreateComponent,
  ],
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class GroupModule { }
