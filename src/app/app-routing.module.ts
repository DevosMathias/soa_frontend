import {RouterModule, Routes} from '@angular/router';
import {FlightsComponent} from './flight/flights.component';
import {NgModule} from '@angular/core';
import {AddFlightsComponent} from './add-flight/add-flight.component';
import {CorridorsComponent} from './corridor/corridors.component';
import {UpdateFlightsComponent} from './update-flight/update-flight.component';

const routes: Routes = [
  {path: 'getFlights', component: FlightsComponent},
  {path: 'addFlightForm', component: AddFlightsComponent},
  {path: 'getCorridors', component: CorridorsComponent},
  {path: 'updateFlight', component: UpdateFlightsComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
