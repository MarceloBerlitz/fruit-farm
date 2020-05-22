import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GroupService } from './group/group.service';
import { TreeService } from './tree/tree.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    GroupService,
    TreeService
  ]
})
export class CoreModule { }
