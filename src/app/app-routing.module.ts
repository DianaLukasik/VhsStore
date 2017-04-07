import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavigationComponent }   from './navigation.component';
import { TapesComponent }      from './tapes.component';
import { VhsDetailComponent }  from './vhs-detail.component';
const routes: Routes = [
  { path: '', redirectTo: '/tapes', pathMatch: 'full' },
  { path: 'navigation',  component: NavigationComponent },
  { path: 'detail/:id', component: VhsDetailComponent },
  { path: 'tapes',     component: TapesComponent }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}