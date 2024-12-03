import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ErrorLoggingService {
  logError(message: string): void {
    console.error('Error:', message);
  }
}
