import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {GroupService} from './group.service';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {GroupsComponent} from './groups.component';
import {AddGroupsComponent} from './add-group.component';

@NgModule({
  declarations: [
    AppComponent,
    GroupsComponent,
    AddGroupsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [GroupService],
  bootstrap: [AppComponent]
})
export class AppModule { }
