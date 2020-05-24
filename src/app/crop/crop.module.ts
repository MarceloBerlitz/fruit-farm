import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { CropListComponent } from './crop-list/crop-list.component';
import { CropDetailsComponent } from './crop-details/crop-details.component';
import { CropCreateComponent } from './crop-create/crop-create.component';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';
import { CropEditComponent } from './crop-edit/crop-edit.component';

@NgModule({
  declarations: [CropListComponent, CropDetailsComponent, CropCreateComponent, CropEditComponent],
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class CropModule { }
