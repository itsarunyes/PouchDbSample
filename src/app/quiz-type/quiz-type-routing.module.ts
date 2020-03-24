import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuizTypePage } from './quiz-type.page';

const routes: Routes = [
  {
    path: '',
    component: QuizTypePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuizTypePageRoutingModule {}
