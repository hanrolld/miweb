import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { BlogComponent } from './blog/blog.component';
import { authGuard } from './guard.guard';

const routes: Routes = [
{path:'login', component:LoginComponent},
{ path: 'blog', component:BlogComponent, canActivate: [authGuard]},
{path:'', redirectTo:'/login', pathMatch: 'full'}]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
