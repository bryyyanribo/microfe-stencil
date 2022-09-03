import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WebComponentsModule } from 'src/libs/web-components.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, WebComponentsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
