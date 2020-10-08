import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MatDialog } from '@angular/material/dialog';
import { RegistrationComponent } from './registration/registration.component';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(
    private dialog: MatDialog,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  openDialog(): void {
    this.dialog.open(RegistrationComponent, {
      width: '300px',
    });
  }

  goToBooktype(): void {
    this.router.navigate(['/booktype']);
  }

}
