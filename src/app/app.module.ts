import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { RegistrationComponent } from './welcome/registration/registration.component';

// Modules
import { MaterialModule } from './material.module';
import { AppRoutingModule } from './app-routing.module';
import { ComponentsModule } from './components/components.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    RegistrationComponent
  ],
  imports: [
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    AuthModule,
    UserModule,
    ComponentsModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
