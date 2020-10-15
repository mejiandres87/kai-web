import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Services
import { RegistrationService } from 'src/app/auth/registration.service';

@Component({
  selector: 'app-provider-selection',
  templateUrl: './provider-selection.component.html',
  styleUrls: ['./provider-selection.component.css']
})
export class ProviderSelectionComponent implements OnInit {

  constructor(
    private router: Router,
    private registrationService: RegistrationService,
  ) { }

  ngOnInit(): void {
    console.log('service data', this.registrationService.getType());
    // TODO: get list of specialist
  }

  selectedSpecialist(specialist: any): void {
    const specialistFiltered = specialist;
    // TODO: search specialist choised
    this.registrationService.setSpecialist(specialistFiltered);
    this.router.navigate(['/schedule']);
  }

}
