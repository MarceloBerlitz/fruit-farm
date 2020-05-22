import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GroupListComponent } from './group/group-list/group-list.component';


const routes: Routes = [
  { path: 'grupos', component: GroupListComponent },
  { path: '', redirectTo: '/grupos', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
