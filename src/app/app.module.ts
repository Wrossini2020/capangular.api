import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';


import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SpacexService } from './services/spacex.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DragonsComponent } from './components/dragons/dragons.component';




@NgModule({
  declarations: [
    AppComponent,
    DragonsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    HttpClientModule,
    FormsModule,
    
  ],
  providers: [SpacexService],
  bootstrap: [AppComponent]
})
export class AppModule { }
