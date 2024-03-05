import { Injectable, inject } from '@angular/core';
import { ProductStateService } from './product-state.service';
import { Product } from '../products/_data/product';

interface AppState {
  products: Product[];
  currentProduct: Product | null;
}

const initialState: AppState = {
  products: [],
  currentProduct: null,
};

@Injectable({ providedIn: 'root' })
export class StateService {
  private readonly productStateService = inject(ProductStateService);

  constructor() {
    this.productStateService.initializeState(initialState.products);
  }

  get products(): ProductStateService {
    return this.productStateService;
  }
}
