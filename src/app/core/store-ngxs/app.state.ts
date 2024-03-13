import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';

import { AppActions } from './app.actions';

interface AppStateModel {
  apiCalls: number;
}

const DEFAULT_STATE: AppStateModel = {
  apiCalls: 0,
};

type AppContext = StateContext<AppStateModel>;

@Injectable()
@State({
  name: 'app',
  defaults: DEFAULT_STATE,
})
export class AppState {
  @Selector()
  static apiCalls(state: AppStateModel) {
    console.log('SELECT apiCalls', state.apiCalls);
    return state.apiCalls;
  }

  @Selector()
  static isLoading(state: AppStateModel) {
    return state.apiCalls > 0;
  }

  @Action(AppActions.DecrementApiCalls)
  decrementApiCalls({ setState }: AppContext) {
    setState((state) => ({ ...state, apiCalls: state.apiCalls - 1 }));
  }

  @Action(AppActions.IncrementApiCalls)
  incrementApiCalls({ setState }: AppContext) {
    setState((state) => ({ ...state, apiCalls: state.apiCalls + 1 }));
  }
}
