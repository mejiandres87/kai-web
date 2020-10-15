import { Injectable } from '@angular/core';
import { Registry } from './registry.model';

@Injectable({
    providedIn: 'root'
})
export class RegistrationService {

    private type: any;
    private specialist: any;
    private dateSelected: any;

    constructor() {
        this.type = {};
        this.specialist = {};
        this.dateSelected = {};
    }

    public setType(type: any): void {
        this.type = {...this.type, ...type};
    }

    public getType(): any {
        return this.dateSelected;
    }

    public setDateSelected(dateSelected: any): void {
        this.dateSelected = {...this.dateSelected, ...dateSelected};
    }

    public getDateSelected(): any {
        return this.dateSelected;
    }

    public setSpecialist(specialist: any): void {
        this.specialist = {...this.specialist, ...specialist};
    }

    public getSpecialist(): any {
        return this.specialist;
    }

    registerUser(registry: Registry): void {

    }
}
