import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BasicCrudPage } from './basic-crud.page';

const routes: Routes = [
  {
    path: '',
    component: BasicCrudPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BasicCrudPageRoutingModule {}
