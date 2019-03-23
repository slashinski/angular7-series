import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// library
import { EntCommonModule } from '@ent/common';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EntCommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
