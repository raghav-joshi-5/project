import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductStatusComponent } from './shared/component/product-status/product-status.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductFormComponent } from './shared/component/product-form/product-form.component';
import { MaterialModule } from './shared/material/material/material.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, ProductStatusComponent, ProductFormComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
