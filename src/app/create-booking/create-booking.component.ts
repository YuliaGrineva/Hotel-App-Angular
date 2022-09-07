import { Component, OnInit } from '@angular/core';
import { Booking } from '../booking';
import { BookingService } from '../booking.service';

import { Router, ActivatedRoute } from '@angular/router';
import { subscribeOn } from 'rxjs';

@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.css']
})
export class CreateBookingComponent implements OnInit {

  constructor ( 
    private router: Router, 
    private activatedRoute: ActivatedRoute, 
    private BookingService:BookingService) { }

  booking: Booking = {
    id: 100,
    name: "Your name",
    roomNumber: 100,
    startDate: new Date(),
    endDate: new Date(),


  }

  ngOnInit(): void {
    if (this.router.url != '/createBooking') {
    var id = Number (this.activatedRoute.snapshot.paramMap.get("id"));
    this.BookingService.getBookingById(id).subscribe((result) => {
      this.booking = result;
    });
    }
  }

  save(): void {

    this.BookingService.addBooking(this.booking).subscribe((result) => {});

    this.router.navigate(['/bookings']);
  }

  dateChanged(event: Event, isStart: boolean): void {
    var val = (event.target as HTMLInputElement).value;
    if (isStart) {
      this.booking.startDate = new Date(val);
    } else {
      this.booking.endDate = new Date(val);
    }

  }
}
