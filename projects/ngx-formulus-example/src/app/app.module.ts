import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgxFormulusModule } from 'projects/ngx-formulus/src/public-api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import type { NgxFormulusConfig } from 'projects/ngx-formulus/src/lib/interfaces/ngx-formulus-config';

const formulusConfig: NgxFormulusConfig = {
  test: 'Hello World!',
};

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxFormulusModule.forRoot(formulusConfig),
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
