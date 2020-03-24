import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuizCategoryListPage } from './quiz-category-list.page';

const routes: Routes = [
  {
    path: '',
    component: QuizCategoryListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuizCategoryListPageRoutingModule {}
