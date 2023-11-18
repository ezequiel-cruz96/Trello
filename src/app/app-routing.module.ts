import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardlistComponent } from './cardlist/cardlist.component';
import { CompanyComponent } from './company/company.component';

const routes: Routes = [
  { path: 'nosotros', component: CompanyComponent },
  { path: '**', component: CardlistComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
