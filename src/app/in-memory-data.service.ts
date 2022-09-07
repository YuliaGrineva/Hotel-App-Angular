import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Booking } from './booking';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const bookings: Booking[] = [
      {id: 1,
      name: 'Julia Grineva',
      roomNumber: 1,
      startDate: new Date(),
      endDate: new Date("2015-01-01")
      },
      {id: 2,
          name: 'Jesla David',
          roomNumber: 2,
          startDate: new Date(),
          endDate: new Date("2016-04-05")
          },
          {id: 3,
              name: 'Lisa Williams',
              roomNumber: 3,
              startDate: new Date(),
              endDate: new Date("2014-05-05")
              },
              {id: 4,
                  name: 'Mona Williams',
                  roomNumber: 4,
                  startDate: new Date(),
                  endDate: new Date("2014-05-05")
                  },
  ]
    return {bookings};
  }

  constructor() { }
}
