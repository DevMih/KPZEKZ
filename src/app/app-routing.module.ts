import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ClothingComponent } from './clothing/clothing.component';

const routes: Routes = [
  {path:'clothing', component:ClothingComponent},
  {path:'', component:ClothingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
