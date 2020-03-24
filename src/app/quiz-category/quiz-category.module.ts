import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuizCategoryPageRoutingModule } from './quiz-category-routing.module';

import { QuizCategoryPage } from './quiz-category.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuizCategoryPageRoutingModule
  ],
  declarations: [QuizCategoryPage]
})
export class QuizCategoryPageModule {}
