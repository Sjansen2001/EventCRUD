import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudService } from 'src/app/service/crud.service';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.scss'],
})
export class EventDetailComponent implements OnInit {
  GetId: any;
  updateForm: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private activatedRoute: ActivatedRoute,
    private crudService: CrudService
  ) {
    this.GetId = this.activatedRoute.snapshot.paramMap.get('id');

    this.crudService.getEvent(this.GetId).subscribe((res) => {
      this.updateForm.setValue({
        eventTitle: res['eventTitle'],
        eventDescription: res['eventDescription'],
        startDate: res['startDate'],
        endDate: res['endDate'],
        avenue: res['avenue'],
        maxMembers: res['maxMembers'],
      });
    });

    this.updateForm = this.formBuilder.group({
      eventTitle: [''],
      eventDescription: [''],
      startDate: [''],
      endDate: [''],
      avenue: [''],
      maxMembers: [''],
    });
  }

  ngOnInit(): void {}

  onUpdate(): any {
    this.crudService.updateEvent(this.GetId, this.updateForm.value).subscribe(
      () => {
        console.log('Data updated succesfully!');
        this.ngZone.run(() => this.router.navigateByUrl('/events-list'));
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
