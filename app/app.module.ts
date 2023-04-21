import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { ModalModule } from 'ngx-bootstrap/modal';
import { ModelCompComponent } from './model-comp/model-comp.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ModalModule.forRoot() ],
  declarations: [ AppComponent, HelloComponent, ModelCompComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
