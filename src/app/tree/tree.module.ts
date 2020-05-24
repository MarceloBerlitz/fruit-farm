import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { TreeListComponent } from './tree-list/tree-list.component';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';
import { TreeDetailsComponent } from './tree-details/tree-details.component';
import { TreeCreateComponent } from './tree-create/tree-create.component';

@NgModule({
  declarations: [
    TreeListComponent,
    TreeDetailsComponent,
    TreeCreateComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class TreeModule { }
