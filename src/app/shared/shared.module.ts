import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [LoginComponent, ProfileComponent, RegisterComponent, DashboardComponent, MenuComponent],
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    ProfileComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    MenuComponent
  ]
})
export class SharedModule { }
