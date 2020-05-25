import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { GroupService } from './group/group.service';
import { TreeService } from './tree/tree.service';
import { CropService } from './crop/crop.service';
import { SpeciesService } from './species/species.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    GroupService,
    TreeService,
    CropService,
    SpeciesService,
  ]
})
export class CoreModule { }
