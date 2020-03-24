import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BasicCrudPageRoutingModule } from './basic-crud-routing.module';

import { BasicCrudPage } from './basic-crud.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BasicCrudPageRoutingModule
  ],
  declarations: [BasicCrudPage]
})
export class BasicCrudPageModule {}
