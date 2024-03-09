import { createActionGroup, emptyProps, props } from '@ngrx/store';

import { Product } from '../_data/product';

export const productsPageActions = createActionGroup({
  source: 'Products Page',
  events: {
    'Load Products': emptyProps(),
  },
});

export const productEditPageActions = createActionGroup({
  source: 'Product Edit Page',
  events: {
    'Load Product': props<{ id: number }>(),
    'Add Product': props<{ product: Product }>(),
    'Save Product': props<{ product: Product }>(),
  },
});

export const productApiActions = createActionGroup({
  source: 'Products API',
  events: {
    'Load Product Success': props<{ product: Product }>(),
    'Load Product Error': emptyProps(),
    'Load Products Success': props<{ products: Product[] }>(),
    'Load Products Error': emptyProps(),
    'Add Product Success': emptyProps(),
    'Add Product Error': emptyProps(),
    'Save Product Success': emptyProps(),
    'Save Product Error': emptyProps(),
  },
});
