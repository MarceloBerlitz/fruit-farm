import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { CropListComponent } from './crop-list/crop-list.component';
import { CropDetailsComponent } from './crop-details/crop-details.component';
import { CropCreateComponent } from './crop-create/crop-create.component';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [CropListComponent, CropDetailsComponent, CropCreateComponent],
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class CropModule { }
