import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root',
})
export class AppData implements InMemoryDbService {
  createDb() {
    return {
      orders: [{ id: 1 }, { id: 2 }, { id: 3 }],
      products: [
        { id: 1, name: 'Playstation', price: 500 },
        { id: 2, name: 'Fridge', price: 800 },
        { id: 3, name: 'Coffee Machine', price: 1300 },
      ],
    };
  }
}
