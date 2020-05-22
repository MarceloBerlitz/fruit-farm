import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GroupListComponent } from './group/group-list/group-list.component';
import { GroupCreateComponent } from './group/group-create/group-create.component';
import { GroupDetailsComponent } from './group/group-details/group-details.component';

const routes: Routes = [
  {
    path: 'grupos', children: [
      { path: '', component: GroupListComponent },
      { path: 'novo', component: GroupCreateComponent },
      { path: ':id', component: GroupDetailsComponent }
    ]
  },
  { path: '', redirectTo: '/grupos', pathMatch: 'full' },
  { path: '**', redirectTo: '/grupos' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
