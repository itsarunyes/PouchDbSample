import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuizCategoryPage } from './quiz-category.page';

const routes: Routes = [
  {
    path: '',
    component: QuizCategoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuizCategoryPageRoutingModule {}
