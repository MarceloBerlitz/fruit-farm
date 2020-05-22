import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GroupComponent } from './group/component/group.component';


const routes: Routes = [
  { path: 'grupos', component: GroupComponent },
  { path: '', redirectTo: '/grupos', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
