import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GroupService } from './group/group.service';
import { TreeService } from './tree/tree.service';
import { CropService } from './crop/crop.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    GroupService,
    TreeService,
    CropService
  ]
})
export class CoreModule { }
