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
  },
  {
    path: 'messages',
    loadChildren: () => import('./messages/messages.module').then( m => m.MessagesPageModule)
  },
  {
    path: 'gym-locations',
    loadChildren: () => import('./gym-locations/gym-locations.module').then( m => m.GymLocationsPageModule)
  },
  {
    path: 'nonmember-menu',
    loadChildren: () => import('./nonmember-menu/nonmember-menu.module').then( m => m.NonMemberMenuPageModule)
  },
  {
    path: 'membership-details/:id',
    loadChildren: () => import('./membership-details/membership-details.module').then( m => m.MembershipDetailsPageModule)
  },
  {
    path: 'meal-details/:id',
    loadChildren: () => import('./meal-details/meal-details.module').then( m => m.MealDetailsPageModule)
  },
  {
    path: 'membership-options',
    loadChildren: () => import('./membership-options/membership-options.module').then( m => m.MembershipOptionsPageModule)
  },
  {
    path: 'meal-options',
    loadChildren: () => import('./meal-options/meal-options.module').then( m => m.MealOptionsPageModule)
  },
  {
    path: 'admin-login',
    loadChildren: () => import('./admin-login/admin-login.module').then( m => m.AdminLoginPageModule)
  },
  {
    path: 'adminmenu',
    loadChildren: () => import('./adminmenu/adminmenu.module').then( m => m.AdminmenuPageModule)
  },
  {
    path: 'edit-personalized-routines',
    loadChildren: () => import('./edit-personalized-routines/edit-personalized-routines.module').then( m => m.EditPersonalizedRoutinesPageModule)
  },
  {
    path: 'edit-diet-plans',
    loadChildren: () => import('./edit-diet-plans/edit-diet-plans.module').then( m => m.EditDietPlansPageModule)
  },
  {
    path: 'edit-equipment-status',
    loadChildren: () => import('./edit-equipment-status/edit-equipment-status.module').then( m => m.EditEquipmentStatusPageModule)
  },

  // Add any other routes you need here
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
