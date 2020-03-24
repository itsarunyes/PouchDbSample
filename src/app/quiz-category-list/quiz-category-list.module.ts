import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuizCategoryListPageRoutingModule } from './quiz-category-list-routing.module';

import { QuizCategoryListPage } from './quiz-category-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuizCategoryListPageRoutingModule
  ],
  declarations: [QuizCategoryListPage]
})
export class QuizCategoryListPageModule {}
