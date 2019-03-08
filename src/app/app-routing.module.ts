import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { UpdateroleComponent } from './updaterole/updaterole.component';
import { UpdateinfoComponent } from './updateinfo/updateinfo.component';
import { AcceptinfoComponent } from './acceptinfo/acceptinfo.component';
import { CreateroleComponent } from './createrole/createrole.component';
import { ViewinfoComponent } from './viewinfo/viewinfo.component';
import { LogoutComponent } from './logout/logout.component';
import { ErrorComponent } from './error/error.component';
import { CreateuserComponent} from './createuser/createuser.component';

const routes: Routes = [
  {
    path: '',
    component:LoginComponent
  },
  { path: 'error', component: ErrorComponent},
  { path: 'admin', component: AdminComponent},
  { path: 'login', component: LoginComponent},
  { path: 'logout', component: LogoutComponent},
  { path: 'updaterole', component: UpdateroleComponent},
  { path: 'updateinfo', component: UpdateinfoComponent},
  { path: 'acceptinfo', component: AcceptinfoComponent},
  { path: 'createrole', component: CreateroleComponent},
  { path: 'viewinfo', component: ViewinfoComponent},
  { path: 'createuser', component: CreateuserComponent}
];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
export const routing:ModuleWithProviders = RouterModule.forRoot(routes);
