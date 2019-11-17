import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { CockpitComponent } from './cockpit/cockpit.component';
import { ServerelementComponent } from './serverelement/serverelement.component';
import { AccountComponent } from './account/account.component';
import {ServerService} from './shared/app.service.server'
import {LoggingServices} from './shared/app.service.logging'

@NgModule({
  declarations: [
    AppComponent,
    CockpitComponent,
    ServerelementComponent,
    AccountComponent
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [ServerService,LoggingServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
