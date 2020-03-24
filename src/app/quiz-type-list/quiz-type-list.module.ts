import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuizTypeListPageRoutingModule } from './quiz-type-list-routing.module';

import { QuizTypeListPage } from './quiz-type-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuizTypeListPageRoutingModule
  ],
  declarations: [QuizTypeListPage]
})
export class QuizTypeListPageModule {}
