import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { UserSignupComponent } from './user-signup/user-signup.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { ProfessionalLoginComponent } from './professional-login/professional-login.component';
import { ProfessionalSignupComponent } from './professional-signup/professional-signup.component';

// Service
import { RegistrationService } from './registration.service';

@NgModule({
  declarations: [
    UserSignupComponent,
    UserLoginComponent,
    ProfessionalLoginComponent,
    ProfessionalSignupComponent,
  ],
  exports: [
    UserSignupComponent,
    UserLoginComponent,
    ProfessionalLoginComponent,
    ProfessionalSignupComponent,
  ],
  imports: [
    CommonModule
  ],
  providers: [
    RegistrationService,
  ]
})
export class AuthModule { }
