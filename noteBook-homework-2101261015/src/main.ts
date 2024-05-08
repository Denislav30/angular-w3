import { enableProdMode } from '@angular/core';
import { environment } from './environment.prod';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { FormsModule } from '@angular/forms';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    BrowserAnimationsModule,
    HttpClientModule,
    { provide: MatInputModule, useClass: MatInputModule },
    { provide: MatButtonModule, useClass: MatButtonModule },
    { provide: MatFormFieldModule, useClass: MatFormFieldModule },
    { provide: MatIconModule, useClass: MatIconModule },
    { provide: MatListModule, useClass: MatListModule },
    FormsModule
  ]
});