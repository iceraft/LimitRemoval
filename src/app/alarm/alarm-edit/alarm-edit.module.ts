import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AlarmPage } from '../alarm.page';
import { AlarmEditPage } from './alarm-edit.page';

const routes: Routes = [
  {
    path: '',
    component: AlarmEditPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AlarmEditPage],
  entryComponents: [AlarmEditPage],
})
export class AlarmEditPageModule {}
