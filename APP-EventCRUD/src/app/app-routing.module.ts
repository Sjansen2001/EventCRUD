import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEventComponent } from './components/add-event/add-event.component';
import { EventDetailComponent } from './components/event-detail/event-detail.component';
import { EventsListComponent } from './components/events-list/events-list.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'add-event' },
  { path: 'events-list', component: EventsListComponent },
  { path: 'add-event', component: AddEventComponent },
  { path: 'edit-event/:id', component: EventDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
