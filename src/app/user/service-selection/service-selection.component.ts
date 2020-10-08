import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Services
import { RegistrationService } from 'src/app/auth/registration.service';

@Component({
  selector: 'app-service-selection',
  templateUrl: './service-selection.component.html',
  styleUrls: ['./service-selection.component.css']
})
export class ServiceSelectionComponent implements OnInit {

  constructor(
    private router: Router,
    private registrationService: RegistrationService,
  ) { }

  ngOnInit(): void {
  }

  onSelected( data: any ): void {
    this.registrationService.setType(data);
    this.router.navigate(['/select']);
  }

}
