import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/service/crud.service';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.scss'],
})
export class EventsListComponent implements OnInit {
  Events: any = [];

  constructor(
    private crudService: CrudService,
    private router: Router,
    private ngZone: NgZone
  ) {}

  ngOnInit(): void {
    this.crudService.getEvents().subscribe((res) => {
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
}
