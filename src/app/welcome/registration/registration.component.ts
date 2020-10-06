import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RegistrationService } from '../../auth/registration.service'

@Component({
    selector: 'app-registration',
    templateUrl: './registration.component.html'
})
export class RegistrationComponent {

    form: FormGroup = new FormGroup({
        $key: new FormControl(null),
        firstName: new FormControl(''),
        lastName: new FormControl(''),
        email: new FormControl('')
    });

    constructor(private service: RegistrationService) { }

}