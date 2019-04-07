import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AlarmAddPage } from './alarm-add.page';

const routes: Routes = [
  {
    path: '',
    component: AlarmAddPage
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
  declarations: [AlarmAddPage],
  entryComponents: [AlarmAddPage],
})
export class AlarmAddPageModule {}
