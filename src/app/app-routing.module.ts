import {RouterModule, Routes} from '@angular/router';
import {GroupsComponent} from './groups.component';
import {NgModule} from '@angular/core';
import {AddGroupsComponent} from './add-group.component';

const routes: Routes = [
  {path: 'groupOverview', component: GroupsComponent},
  {path: 'addGroupForm', component: AddGroupsComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
