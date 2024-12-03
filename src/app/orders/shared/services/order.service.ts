import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';

import { Order } from '../models/order';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private http = inject(HttpClient);

  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>('/api/orders').pipe(catchError(() => of([])));
  }

  getOrder(id: number): Observable<Order | null> {
    const randomId = Math.floor(Math.random() * 5);
    return this.http
      .get<Order>(`/api/orders/${randomId}`)
      .pipe(catchError((err) => of(null)));
  }
}
