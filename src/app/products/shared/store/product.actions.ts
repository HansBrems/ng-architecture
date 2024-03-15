import { createActionGroup, emptyProps, props } from '@ngrx/store';

import { Product } from '../models/product';

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
    'Insert Product': props<{ product: Product }>(),
    'Update Product': props<{ product: Product }>(),
  },
});

export const productApiActions = createActionGroup({
  source: 'Product API',
  events: {
    'Load Product Success': props<{ product: Product }>(),
    'Load Product Error': emptyProps(),
    'Load Products Success': props<{ products: Product[] }>(),
    'Load Products Error': emptyProps(),
    'Insert Product Success': emptyProps(),
    'Insert Product Error': emptyProps(),
    'Update Product Success': emptyProps(),
    'UpdateProduct Error': emptyProps(),
  },
});
