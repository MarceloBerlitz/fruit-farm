import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GroupListComponent } from './group/group-list/group-list.component';
import { GroupCreateComponent } from './group/group-create/group-create.component';
import { GroupDetailsComponent } from './group/group-details/group-details.component';
import { TreeListComponent } from './tree/tree-list/tree-list.component';
import { TreeDetailsComponent } from './tree/tree-details/tree-details.component';
import { TreeCreateComponent } from './tree/tree-create/tree-create.component';

const routes: Routes = [
  {
    path: 'grupos', children: [
      { path: '', component: GroupListComponent },
      { path: 'novo', component: GroupCreateComponent },
      { path: ':id', component: GroupDetailsComponent }
    ]
  },
  { path: 'arvores', children: [
    { path: '', component: TreeListComponent },
    { path: 'nova', component: TreeCreateComponent },
    { path: ':id', component: TreeDetailsComponent }
  ]},
  { path: '', redirectTo: '/grupos', pathMatch: 'full' },
  { path: '**', redirectTo: '/grupos' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
