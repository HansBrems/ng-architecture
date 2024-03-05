import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppData implements InMemoryDbService {
  createDb() {
    return {
      products: [
        { id: 1, name: 'Playstation', price: 500 },
        { id: 2, name: 'Fridge', price: 800 },
        { id: 3, name: 'Coffee Machine', price: 1300 },
      ],
    };
  }
}
