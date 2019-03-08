import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule} from '@angular/http';
import {LoginFormService} from './services/app.login.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CustomMaterialModule } from './core/material.module';
import 'rxjs';
import { LoginComponent } from './login/login.component';
import { InfoService } from './services/app.info.service';
import {UserService} from './services/app.user.service'
import { routing } from "./app-routing.module";
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UpdateinfoComponent } from './updateinfo/updateinfo.component';
import { UpdateroleComponent } from './updaterole/updaterole.component';
import { AcceptinfoComponent } from './acceptinfo/acceptinfo.component';
import { LogoutComponent } from './logout/logout.component';
import { ErrorComponent } from './error/error.component';
import { CreateroleComponent } from './createrole/createrole.component';
import { ViewinfoComponent } from './viewinfo/viewinfo.component';
import { CreateuserComponent } from './createuser/createuser.component';
import { SearchPipe } from './pipe/search';


@NgModule({
  declarations: [
    LoginComponent,
    AdminComponent,
    AppComponent,
    DashboardComponent,
    UpdateinfoComponent,
    UpdateroleComponent,
    AcceptinfoComponent,
    LogoutComponent,
    ErrorComponent,
    CreateroleComponent,
    ViewinfoComponent,
    CreateuserComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    routing,
    BrowserAnimationsModule,
    CustomMaterialModule
  ],
  providers: [
    LoginFormService,
    InfoService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
