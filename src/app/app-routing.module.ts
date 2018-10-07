import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { ClientsComponent } from './clients/clients.component';
import { AdminComponent} from './admin/admin.component';

import { ReservationComponent } from './reservation/reservation.component';
import { ConfigurationComponent } from './configuration/configuration.component';
import { TestComponent } from './test/test.component';


const appRoutes: Routes = [
  { path: 'clients', component : ClientsComponent },
  { path: 'admin', component : AdminComponent },
  { path: 'test', component :  TestComponent},
  { path: 'configuration', component : ConfigurationComponent },
  { path: 'reservation', component : ReservationComponent }
 ];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: false,
        preloadingStrategy: PreloadAllModules
       }
    )
  ]
})
export class AppRoutingModule { }
