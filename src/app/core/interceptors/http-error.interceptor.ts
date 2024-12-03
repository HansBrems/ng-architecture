import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandlerFn,
  HttpInterceptorFn,
  HttpRequest,
} from '@angular/common/http';
import { inject } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { ErrorLoggingService } from '../services/error-logging.service';

export const httpErrorInterceptor: HttpInterceptorFn = (
  req: HttpRequest<any>,
  next: HttpHandlerFn,
): Observable<HttpEvent<any>> => {
  const errorLoggingService = inject(ErrorLoggingService);
  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      errorLoggingService.logError(error.message);
      return throwError(() => error);
    }),
  );
};
