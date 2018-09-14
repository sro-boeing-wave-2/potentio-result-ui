import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResultComponent } from './result/result.component';
import { StartComponent } from './start/start.component';

const routes: Routes = [
  { path: '',redirectTo: '/result/:quizId',  pathMatch: 'full'},
 // {path:'start/:userId/:domain', component:StartComponent},
  {path:'result/:quizId', component:ResultComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
export const routingComponents = [ResultComponent];
