import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';

@NgModule({
    imports: [
        MatButtonModule,
        MatIconModule,
        MatCardModule,
        MatDatepickerModule,
        MatInputModule,
        MatDialogModule],
    exports: [
        MatButtonModule,
        MatIconModule,
        MatCardModule,
        MatDatepickerModule,
        MatInputModule,
        MatDialogModule]
})
export class MaterialModule {}
