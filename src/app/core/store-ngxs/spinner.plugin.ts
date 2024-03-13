import { Injectable, Injector } from '@angular/core';
import { NgxsPlugin, Store, getActionTypeFromInstance } from '@ngxs/store';
import { tap } from 'rxjs';

import { AppActions } from './app.actions';

@Injectable()
export class SpinnerPlugin implements NgxsPlugin {
  constructor(private injector: Injector) {}

  handle(state: any, action: any, next: any) {
    const actionType = getActionTypeFromInstance(action);
    console.log(actionType);
    if (!actionType?.includes('Load')) {
      return next(state, action);
    } else {
      const store = this.injector.get(Store);

      store.dispatch(new AppActions.IncrementApiCalls());

      return next(state, action).pipe(
        tap(() => store.dispatch(new AppActions.DecrementApiCalls())),
      );
    }
  }
}
