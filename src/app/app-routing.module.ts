import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GroupListComponent } from './group/group-list/group-list.component';
import { GroupCreateComponent } from './group/group-create/group-create.component';
import { GroupDetailsComponent } from './group/group-details/group-details.component';
import { TreeListComponent } from './tree/tree-list/tree-list.component';
import { TreeDetailsComponent } from './tree/tree-details/tree-details.component';
import { TreeCreateComponent } from './tree/tree-create/tree-create.component';
import { SpeciesListComponent } from './species/species-list/species-list.component';
import { SpeciesCreateComponent } from './species/species-create/species-create.component';
import { SpeciesDetailsComponent } from './species/species-details/species-details.component';
import { CropListComponent } from './crop/crop-list/crop-list.component';
import { CropCreateComponent } from './crop/crop-create/crop-create.component';
import { CropDetailsComponent } from './crop/crop-details/crop-details.component';
import { GroupEditComponent } from './group/group-edit/group-edit.component';
import { TreeEditComponent } from './tree/tree-edit/tree-edit.component';
import { CropEditComponent } from './crop/crop-edit/crop-edit.component';

const routes: Routes = [
  {
    path: 'grupos', children: [
      { path: 'novo', component: GroupCreateComponent },
      { path: ':id', children: [
        { path: 'editar', component: GroupEditComponent },
        { path: '', component: GroupDetailsComponent }
      ] },
      { path: '', component: GroupListComponent }
    ]
  },
  { 
    path: 'arvores', children: [
    { path: 'nova', component: TreeCreateComponent },
    { path: ':id', children: [
      { path: 'editar', component: TreeEditComponent },
      { path: '', component: TreeDetailsComponent },
    ]},
    { path: '', component: TreeListComponent },
  ]},
  {
    path: 'especies', children: [
      { path: 'nova', component: SpeciesCreateComponent },
      { path: ':id', component: SpeciesDetailsComponent },
      { path: '', component: SpeciesListComponent },
    ]
  },
  {
    path: 'colheitas', children: [
      { path: 'nova', component: CropCreateComponent },
      { path: ':id', children: [
        { path: 'editar', component: CropEditComponent },
        { path: '', component: CropDetailsComponent },
      ] },
      { path: '', component: CropListComponent },
    ]
  },
  { path: '**', redirectTo: '/grupos' },
  { path: '', redirectTo: '/grupos', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
