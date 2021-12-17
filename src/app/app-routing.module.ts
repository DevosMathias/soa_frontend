import {RouterModule, Routes} from '@angular/router';
import {FlightsComponent} from './flight/flights.component';
import {NgModule} from '@angular/core';
import {AddFlightsComponent} from './add-flight/add-flight.component';
import {CorridorsComponent} from './corridor/corridors.component';
import {UpdateFlightsComponent} from './update-flight/update-flight.component';
import {UserComponent} from './user/user.component';
import {AddUserComponent} from './add-user/add-user.component';
import {Liveboard} from './liveboard/liveboard';
import {LiveboardComponent} from './liveboard/liveboard.component';
import {UpdateUserComponent} from './update-user/update-user.component';
import {TtcstopComponent} from './ttcstop/ttcstop.component';
import {BusComponent} from './bus/bus.component';
import {HalteComponent} from './halte/halte.component';
import {UpdateBusComponent} from './update-bus/update-bus.component';
import {AddStopComponent} from './add-stop/add-stop.component';
import {AddBusComponent} from './add-bus/add-bus.component';
import {UpdateStopComponent} from './update-stop/update-stop.component';

const routes: Routes = [
  {path: 'getFlights', component: FlightsComponent},
  {path: 'addFlightForm', component: AddFlightsComponent},
  {path: 'getCorridors', component: CorridorsComponent},
  {path: 'updateFlight', component: UpdateFlightsComponent},
  {path: 'getUsers', component: UserComponent},
  {path: 'addUser', component: AddUserComponent},
  {path: 'liveBoard', component: LiveboardComponent},
  {path: 'updateUser', component: UpdateUserComponent},
  {path: 'getTTCStop', component: TtcstopComponent},
  {path: 'getBusses', component: BusComponent},
  {path: 'getHaltes', component: HalteComponent},
  {path: 'addBus', component: AddBusComponent},
  {path: 'addStop', component: AddStopComponent},
  {path: 'updateBus', component: UpdateBusComponent},
  {path: 'updateHalte', component: UpdateStopComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
