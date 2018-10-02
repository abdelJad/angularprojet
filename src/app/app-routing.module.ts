import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { ClientsComponent } from './clients/clients.component';

const appRoutes: Routes = [
  {
    path: 'clients', component : ClientsComponent}
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
