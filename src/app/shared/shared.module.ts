import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListItemComponent } from './list-item/list-item.component';
import { LoadingComponent } from './loading/loading.component';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [
    ListItemComponent,
    LoadingComponent,
    ListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ListComponent,
    ListItemComponent,
    LoadingComponent
  ]
})
export class SharedModule { }
