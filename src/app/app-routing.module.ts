import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'workout',
    pathMatch: 'full'
  },
  { path: 'workout', loadChildren: './workout/workout.module#WorkoutPageModule' },
  { path: 'workout/:id', loadChildren: './workout/workout.module#WorkoutPageModule' },
  { path: 'alarm', loadChildren: './alarm/alarm.module#AlarmPageModule' },
  { path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule' },
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
