import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UiModule } from './ui/ui.module';

import { AppComponent } from './app.component';
import { ClientsComponent } from './clients/clients.component';
import { AdminComponent } from './admin/admin.component';
import { ConfigurationComponent } from './configuration/configuration.component';
import { ReservationComponent } from './reservation/reservation.component';
import { TestComponent } from './test/test.component';


@NgModule({
  declarations: [
    AppComponent,
    ClientsComponent,
    AdminComponent,
    ConfigurationComponent,
    ReservationComponent,
    TestComponent
],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    UiModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
