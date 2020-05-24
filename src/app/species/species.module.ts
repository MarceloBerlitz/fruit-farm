import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SpeciesCreateComponent } from './species-create/species-create.component';
import { SpeciesListComponent } from './species-list/species-list.component';
import { SpeciesDetailsComponent } from './species-details/species-details.component';
import { SharedModule } from '../shared/shared.module';
import { CoreModule } from '../core/core.module';



@NgModule({
  declarations: [
    SpeciesCreateComponent,
    SpeciesListComponent,
    SpeciesDetailsComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class SpeciesModule { }
