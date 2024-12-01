import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home', // Redirects to the home page by default
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then((m) => m.LoginPageModule),
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then((m) => m.RegisterPageModule),
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: 'about-us',
    loadChildren: () => import('./about-us/about-us.module').then((m) => m.AboutUsPageModule),
  },
  {
    path: 'membermenu',
    loadChildren: () => import('./membermenu/membermenu.module').then( m => m.MembermenuPageModule)
  },
  {
    path: 'personalized-routines',
    loadChildren: () => import('./personalized-routines/personalized-routines.module').then( m => m.PersonalizedRoutinesPageModule)
  },
  {
    path: 'diet-plans',
    loadChildren: () => import('./diet-plans/diet-plans.module').then( m => m.DietPlansPageModule)
  },
  {
    path: 'equipment-status',
    loadChildren: () => import('./equipment-status/equipment-status.module').then( m => m.EquipmentStatusPageModule)
  },  {
    path: 'coach-chat',
    loadChildren: () => import('./coach-chat/coach-chat.module').then( m => m.CoachChatPageModule)
  },


  // Add any other routes you need here
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
