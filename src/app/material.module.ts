import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { MatCardModule } from "@angular/material/card";
import { MatDatepickerModule } from "@angular/material/datepicker";

@NgModule({
    imports: [MatButtonModule, MatIconModule, MatCardModule, MatDatepickerModule],
    exports: [MatButtonModule, MatIconModule, MatCardModule, MatDatepickerModule]
})
export class MaterialModule { }