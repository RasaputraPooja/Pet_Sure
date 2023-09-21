import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotpasswordComponent } from './MyComponents/forgotpassword/forgotpassword.component';
import { LoginComponent } from './MyComponents/login/login.component';
import { LoginpageComponent } from './MyComponents/loginpage/loginpage.component';
import { WelcomeComponent } from './MyComponents/welcome/welcome.component';

const routes: Routes = [

  {path:'',component:WelcomeComponent},
  {path:'login',component:LoginComponent},
  {path:'login1',component:LoginpageComponent},
  {path:'forgotpassword',component:ForgotpasswordComponent},
  {path:'close',component:WelcomeComponent},
  {path:'backtologin',component:LoginpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
