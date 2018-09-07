import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResultComponent } from './result/result.component';
import { StartComponent } from './start/start.component';

const routes: Routes = [
  { path: '',redirectTo: '/start/:userId/:domain',  pathMatch: 'full'},
  {path:'start/:userId/:domain', component:StartComponent},
  {path:'result/:userId/:domain', component:ResultComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
export const routingComponents = [ResultComponent, StartComponent];
