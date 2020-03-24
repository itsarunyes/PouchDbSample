import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuizTypePageRoutingModule } from './quiz-type-routing.module';

import { QuizTypePage } from './quiz-type.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuizTypePageRoutingModule
  ],
  declarations: [QuizTypePage]
})
export class QuizTypePageModule {}
