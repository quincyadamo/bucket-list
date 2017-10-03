import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './dashboard/profile/profile.component';
import { MyProfileComponent } from './dashboard/my-profile/my-profile.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'dashboard',  component: DashboardComponent, children: [
        { path: '', component: MyProfileComponent },
        { path: 'user/:id', component: ProfileComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
