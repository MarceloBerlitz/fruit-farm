import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { GroupComponent } from './component/group.component';
import { SharedModule } from '../shared/shared.module';
import { GroupService } from './service/group.service';

@NgModule({
  declarations: [
    GroupComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule
  ],
  providers: [
    GroupService
  ]
})
export class GroupModule { }
