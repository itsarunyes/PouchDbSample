import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { EmployeePage} from './employee/employee.page';
import { FormsModule } from '@angular/forms';


import { QuizCategoryPageModule } from './quiz-category/quiz-category.module';
import { QuizTypePageModule } from './quiz-type/quiz-type.module';

@NgModule({
  declarations: [AppComponent,EmployeePage],
  entryComponents: [EmployeePage],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,FormsModule,QuizCategoryPageModule,QuizTypePageModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
