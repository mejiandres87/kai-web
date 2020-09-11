import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelcomeComponent } from "./welcome/welcome.component";
import { UserSignupComponent } from "./auth/user-signup/user-signup.component";
import { UserLoginComponent } from "./auth/user-login/user-login.component";
import { ServiceSelectionComponent } from "./user/service-selection/service-selection.component";
import { ProfessionalLoginComponent } from "./auth/professional-login/professional-login.component";
import { ProfessionalSignupComponent } from "./auth/professional-signup/professional-signup.component";
import { ProviderSelectionComponent } from './user/provider-selection/provider-selection.component';
import { DateSelectionComponent } from './user/date-selection/date-selection.component';

const routes: Routes = [
    { path: '', component: WelcomeComponent },
    { path: 'users/signup', component: UserSignupComponent },
    { path: 'users/login', component: UserLoginComponent },
    { path: 'booktype', component: ServiceSelectionComponent },
    { path: 'select', component: ProviderSelectionComponent },
    { path: 'schedule', component: DateSelectionComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }