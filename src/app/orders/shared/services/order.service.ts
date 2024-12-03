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
    return this.http
      .get<Order>(`/api/orders/${id}`)
      .pipe(catchError((err) => of(null)));
  }
}
