import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { MatCardModule } from "@angular/material/card";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatFormFieldModule } from "@angular/material/form-field";

@NgModule({
    imports: [MatButtonModule, MatIconModule, MatCardModule, MatDatepickerModule, MatFormFieldModule],
    exports: [MatButtonModule, MatIconModule, MatCardModule, MatDatepickerModule, MatFormFieldModule]
})
export class MaterialModule { }