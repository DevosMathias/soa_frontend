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
import {TtcstopComponent} from './ttcstop/ttcstop.component';
import {TtcstopService} from './ttcstop/ttcstop.service';
import {BusService} from './bus/bus.service';
import {BusComponent} from './bus/bus.component';
import {HalteService} from './halte/halte.service';
import {HalteComponent} from './halte/halte.component';
import {UpdateBusComponent} from './update-bus/update-bus.component';
import {AddStopComponent} from './add-stop/add-stop.component';
import {AddBusComponent} from './add-bus/add-bus.component';
import {UpdateStopComponent} from './update-stop/update-stop.component';
import {DriveComponent} from './drive/drive.component';
import {AddDriveComponent} from './add-drive/add-drive.component';
import {UpdateDriveComponent} from './update-drive/update-drive.component';
import {DriveService} from './drive/drive.service';

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
    UpdateUserComponent,
    TtcstopComponent,
    BusComponent,
    HalteComponent,
    AddBusComponent,
    AddStopComponent,
    UpdateBusComponent,
    UpdateStopComponent,
    DriveComponent,
    AddDriveComponent,
    UpdateDriveComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [FlightService, CorridorService, TtcstopService, BusService, HalteService, DriveService],
  bootstrap: [AppComponent]
})
export class AppModule { }
