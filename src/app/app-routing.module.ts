import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientsComponent } from './clients/clients.component';
import { FilesDetailsComponent } from './clients/files/files-details/files-details.component';
import { FilesComponent } from './clients/files/files.component';
import { TasksComponent } from './clients/tasks/tasks.component';
import { TimerComponent } from './clients/timer/timer.component';

const routes: Routes = [
  { path: '', redirectTo: 'clients', pathMatch: 'full' },
  {
    path: 'clients', component: ClientsComponent,
    children: [
      { path: '', redirectTo: 'files', pathMatch: 'full' },
      { path: 'files', component: FilesComponent },
      { path: 'timer', component: TimerComponent },
      { path: 'tasks', component: TasksComponent },
    ],
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
