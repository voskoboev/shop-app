export type TAddToCartProductsStateData<T> = Extract<
  T,
  'products' | 'categoryProducts' | 'individualProduct'
>
