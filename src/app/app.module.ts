import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputBindingComponent } from './view/input-binding/input-binding.component';
import { FormsModule } from '@angular/forms';
import { NgContentComponent } from './view/ng-content/ng-content.component';
import { ChildComponent } from './view/child/child.component';
import { CustomeSetterComponent } from './view/custome-setter/custome-setter.component';
import { NgOnchangeComponent } from './view/ng-onchange/ng-onchange.component';

@NgModule({
  declarations: [
    AppComponent,
    InputBindingComponent,
    NgContentComponent,
    ChildComponent,
    CustomeSetterComponent,
    NgOnchangeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
