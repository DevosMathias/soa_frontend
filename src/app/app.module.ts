import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FlightService} from './flight/flight.service';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {FlightsComponent} from './flight/flights.component';
import {AddFlightsComponent} from './add-flight/add-flight.component';
import {CorridorsComponent} from './corridor/corridors.component';
import {CorridorService} from './corridor/corridor.service';
import {UpdateFlightsComponent} from './update-flight/update-flight.component';
import { StationComponent } from './station/station.component';
import { UserComponent } from './user/user.component';
import { AddUserComponent } from './add-user/add-user.component';
import { LiveboardComponent } from './liveboard/liveboard.component';
import {CommonModule} from '@angular/common';
import { UpdateUserComponent } from './update-user/update-user.component';

@NgModule({
  declarations: [
    AppComponent,
    FlightsComponent,
    AddFlightsComponent,
    CorridorsComponent,
    UpdateFlightsComponent,
    StationComponent,
    UserComponent,
    AddUserComponent,
    LiveboardComponent,
    UpdateUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [FlightService, CorridorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
