import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResultComponent } from './result/result.component';
import { StartComponent } from './start/start.component';

const routes: Routes = [
  { path: '',redirectTo: '/start',  pathMatch: 'full'},
  {path:'start', component:StartComponent},
  {path:'result', component:ResultComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
export const routingComponents = [ResultComponent, StartComponent];
