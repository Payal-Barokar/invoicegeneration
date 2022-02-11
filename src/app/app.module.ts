import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientsComponent } from './clients/clients.component';
import { FilesComponent } from './clients/files/files.component';
import { TimerComponent } from './clients/timer/timer.component';
import { TasksComponent } from './clients/tasks/tasks.component';
import { FilesDetailsComponent } from './clients/files/files-details/files-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientsComponent,
    FilesComponent,
    TimerComponent,
    TasksComponent,
    FilesDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
