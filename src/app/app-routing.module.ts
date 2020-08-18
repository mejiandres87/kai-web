import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelcomeComponent } from "./welcome/welcome.component";
import { UserSignupComponent } from "./auth/user-signup/user-signup.component";
import { UserLoginComponent } from "./auth/user-login/user-login.component";
import { ProfessionalLoginComponent } from "./auth/professional-login/professional-login.component";
import { ProfessionalSignupComponent } from "./auth/professional-signup/professional-signup.component";

const routes: Routes = [
    { path: '', component: WelcomeComponent },
    { path: 'users/signup', component: UserSignupComponent },
    { path: 'users/login', component: UserLoginComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }