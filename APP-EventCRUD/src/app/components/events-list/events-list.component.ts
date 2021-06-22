import { Component, NgZone, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/service/crud.service';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.scss'],
})
export class EventsListComponent implements OnInit {
  Events: any = [];
  EventsLength: any = [];

  constructor(
    private crudService: CrudService,
    private router: Router,
    private ngZone: NgZone
  ) {}

  ngOnInit(): void {
    this.crudService.getEventsLength().subscribe((res) => {
      console.log(res);
      this.EventsLength = res;
    });
    this.crudService.getEvents(0, 10).subscribe((res) => {
      console.log(res);
      this.Events = res;
    });
  }

  delete(id: any, i: any) {
    console.log(id);
    if (window.confirm(`Would you like to delete event ${id}`)) {
      this.crudService.deleteEvent(id).subscribe((res) => {
        this.Events.spilce(i, 1);
      });
    }
  }

  onPageChange(event: PageEvent) {
    console.log(event);
    const limit = event.pageSize;
    console.log(`The page size is: ${limit}`);
    const pageIndex = event.pageIndex;
    console.log(`The page index is: ${pageIndex}`);
    const offset = pageIndex * limit;
    console.log(`The start index is: ${offset}`);
    this.crudService.getEvents(offset, limit).subscribe((res) => {
      console.log(res);
      this.Events = res;
    });
  }
}
