import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { UiComponent } from './container/ui/ui.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { BodyComponent } from './components/body/body.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [HeaderComponent, BodyComponent, UiComponent],
  exports: [UiComponent]
})
export class UiModule { }
