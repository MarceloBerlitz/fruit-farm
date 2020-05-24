import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { TreeListComponent } from './tree-list/tree-list.component';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';
import { TreeDetailsComponent } from './tree-details/tree-details.component';
import { TreeCreateComponent } from './tree-create/tree-create.component';
import { TreeEditComponent } from './tree-edit/tree-edit.component';

@NgModule({
  declarations: [
    TreeListComponent,
    TreeDetailsComponent,
    TreeCreateComponent,
    TreeEditComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class TreeModule { }
