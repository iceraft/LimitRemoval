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
  { path: 'workout-play', loadChildren: './workout/workout-play/workout-play.module#WorkoutPlayPageModule' },
  { path: 'alarm', loadChildren: './alarm/alarm.module#AlarmPageModule' },
  { path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule' },
  { path: 'profile-edit', loadChildren: './profile/profile-edit/profile-edit.module#ProfileEditPageModule' },
  { path: 'settings', loadChildren: './settings/settings.module#SettingsPageModule' },
  { path: 'about', loadChildren: './about/about.module#AboutPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
