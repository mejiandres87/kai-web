import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RegistrationService } from '../../auth/registration.service';

@Component({
    selector: 'app-registration',
    templateUrl: './registration.component.html'
})
export class RegistrationComponent implements OnInit {

    form: FormGroup;

    constructor(
        private service: RegistrationService
    ) { }

    ngOnInit(): void {
        this.form = new FormGroup({
            firstName: new FormControl('', [Validators.required]),
            lastName: new FormControl('', [Validators.required]),
            email: new FormControl('', [Validators.required, Validators.email])
        });
    }

    submitForm(): void {
        console.log(this.form.value);
        // TODO: create submit service
    }

}
