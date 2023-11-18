import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardlistComponent } from './cardlist/cardlist.component';

const routes: Routes = [
  {path:'**',component:CardlistComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
