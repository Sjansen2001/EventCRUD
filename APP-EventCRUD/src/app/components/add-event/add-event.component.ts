import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/service/crud.service';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.scss'],
})
export class AddEventComponent implements OnInit {
  eventForm: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private crudService: CrudService
  ) {
    this.eventForm = this.formBuilder.group({
      eventTitle: [''],
      eventDescription: [''],
      startDate: [''],
      endDate: [''],
      avenue: [''],
      maxMembers: [''],
    });
  }

  ngOnInit(): void {}

  onSubmit(): any {
    console.log('onSubmit');
    console.log(this.eventForm.value);
    const parse = JSON.stringify(this.eventForm.value);
    console.log(parse);
    this.crudService.addEvent(this.eventForm.value).subscribe(
      () => {
        console.log('Data added succesfully!');
        this.ngZone.run(() => this.router.navigateByUrl('/events-list'));
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
