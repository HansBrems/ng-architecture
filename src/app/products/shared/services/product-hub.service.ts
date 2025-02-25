import { Injectable } from '@angular/core';
import {
  HttpTransportType,
  HubConnection,
  HubConnectionBuilder,
} from '@microsoft/signalr';

@Injectable({
  providedIn: 'root',
})
export class ProductHubService {
  private readonly hubConnection: HubConnection;

  constructor() {
    this.hubConnection = new HubConnectionBuilder()
      .withUrl('https://localhost:7253/hubs/products')
      .build();
  }

  getHubConnection(): HubConnection {
    return this.hubConnection;
  }

  async connect(): Promise<void> {
    try {
      await this.hubConnection.start();
    } catch (error) {
      console.error(error);
    }
  }
}
