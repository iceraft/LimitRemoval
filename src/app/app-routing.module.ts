import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'workout',
    pathMatch: 'full'
  },
  { path: 'workout', loadChildren: './workout/workout.module#WorkoutPageModule' },
  { path: 'workout-add', loadChildren: './workout/workout-add/workout-add.module#WorkoutAddPageModule' },
  { path: 'workout-edit', loadChildren: './workout/workout-edit/workout-edit.module#WorkoutEditPageModule' },
  { path: 'alarm', loadChildren: './alarm/alarm.module#AlarmPageModule' },
  { path: 'alarm-add', loadChildren: './alarm/alarm-add/alarm-add.module#AlarmAddPageModule' },
  { path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule' },
  { path: 'settings', loadChildren: './settings/settings.module#SettingsPageModule' },
  { path: 'workout-play', loadChildren: './workout/workout-play/workout-play.module#WorkoutPlayPageModule' },
  { path: 'about', loadChildren: './about/about.module#AboutPageModule' },
  { path: 'profile-edit', loadChildren: './profile/profile-edit/profile-edit.module#ProfileEditPageModule' },
  { path: 'alarm-edit', loadChildren: './alarm/alarm-edit/alarm-edit.module#AlarmEditPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
