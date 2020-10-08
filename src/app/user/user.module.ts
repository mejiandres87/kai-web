import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material.module';

// Components
import { ServiceSelectionComponent } from './service-selection/service-selection.component';
import { ProviderSelectionComponent } from './provider-selection/provider-selection.component';
import { DateSelectionComponent } from './date-selection/date-selection.component';
import { ProviderDetailComponent } from './provider-detail/provider-detail.component';
import { BookConfirmComponent } from './book-confirm/book-confirm.component';
import { SummaryComponent } from './summary/summary.component';

import { ServiceDetailComponent } from './components/service-detail/service-detail.component';
import { ModalMoreDetailComponent } from './components/modal-more-detail/modal-more-detail.component';
import { CardSpecialistComponent } from './components/card-specialist/card-specialist.component';

@NgModule({
  declarations: [
    ServiceSelectionComponent,
    ModalMoreDetailComponent,
    CardSpecialistComponent,
    ServiceDetailComponent,
    ProviderSelectionComponent,
    DateSelectionComponent,
    ProviderDetailComponent,
    BookConfirmComponent,
    SummaryComponent,
  ],
  exports: [
    ServiceSelectionComponent,
    ModalMoreDetailComponent,
    CardSpecialistComponent,
    ServiceDetailComponent,
    ProviderSelectionComponent,
    DateSelectionComponent,
    ProviderDetailComponent,
    BookConfirmComponent,
    SummaryComponent,
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
  ]
})
export class UserModule { }
