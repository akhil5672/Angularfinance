import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexPageComponent } from './index-page/index-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminViewComponent } from './admin-view/admin-view.component';
import { AdminActivateComponent } from './admin-activate/admin-activate.component';
import { RegisterComponent } from './register/register.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ProductInfoComponent } from './product-info/product-info.component';
import { LayoutPageComponent } from './layout-page/layout-page.component';
import {ReactiveFormsModule,FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { from } from 'rxjs';


@NgModule({
  declarations: [
    AppComponent,
    IndexPageComponent,
    LoginPageComponent,
    AdminLoginComponent,
    AdminViewComponent,
    AdminActivateComponent,
    RegisterComponent,
    UserLoginComponent,
    DashboardComponent,
    ForgotPasswordComponent,
    ChangePasswordComponent,
    ProductInfoComponent,
    LayoutPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
