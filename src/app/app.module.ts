import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from "./material.module";
import { ServiceSelectionComponent } from './user/service-selection/service-selection.component';
import { ServiceDetailComponent } from './user/service-detail/service-detail.component';
import { ProviderSelectionComponent } from './user/provider-selection/provider-selection.component';
import { DateSelectionComponent } from './user/date-selection/date-selection.component';
import { BookConfirmComponent } from './user/book-confirm/book-confirm.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { UserSignupComponent } from './auth/user-signup/user-signup.component';
import { UserLoginComponent } from './auth/user-login/user-login.component';
import { ProfessionalLoginComponent } from './auth/professional-login/professional-login.component';
import { ProfessionalSignupComponent } from './auth/professional-signup/professional-signup.component';
import { AppRoutingModule } from "./app-routing.module";
import { FlexLayoutModule } from "@angular/flex-layout";
import { ProviderDetailComponent } from './user/provider-detail/provider-detail.component';
import { RegistrationService } from './auth/registration.service';
import { RegistrationComponent } from './welcome/registration/registration.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ServiceSelectionComponent,
    ServiceDetailComponent,
    ProviderSelectionComponent,
    DateSelectionComponent,
    BookConfirmComponent,
    WelcomeComponent,
    UserSignupComponent,
    UserLoginComponent,
    ProfessionalLoginComponent,
    ProfessionalSignupComponent,
    ProviderDetailComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    FlexLayoutModule,
    ReactiveFormsModule
  ],
  providers: [
    RegistrationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
