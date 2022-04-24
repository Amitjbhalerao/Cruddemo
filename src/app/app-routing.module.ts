import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './auth.guard';
import { FormComponent } from './form/form.component';
import { LoginComponent } from './login/login.component';
import { UpdateComponent } from './update/update.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
    path: 'form',
    component: UpdateComponent,
  },
  { path: 'update', component: FormComponent },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'user',
    component: UserComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
