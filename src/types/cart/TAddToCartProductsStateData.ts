export type TAddToCartProductsStateData<T> = Extract<
  T,
  'allProducts' | 'categoryProducts' | 'individualProduct'
>
