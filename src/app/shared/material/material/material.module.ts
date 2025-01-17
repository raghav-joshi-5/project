import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  declarations: [],
  imports: [
    MatButtonModule,
    MatCardModule,
    MatSnackBarModule,
    MatDividerModule,
  ],
  exports: [
    MatButtonModule,
    MatCardModule,
    MatSnackBarModule,
    MatDividerModule,
  ],
})
export class MaterialModule {}
