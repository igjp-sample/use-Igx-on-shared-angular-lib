import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LibXModule } from 'lib-x';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LibXModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
