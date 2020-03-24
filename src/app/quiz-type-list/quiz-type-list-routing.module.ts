import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuizTypeListPage } from './quiz-type-list.page';

const routes: Routes = [
  {
    path: '',
    component: QuizTypeListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuizTypeListPageRoutingModule {}
