import React from 'react';

interface ShoppingCartItem {
    id: number;
    name: string;
    price: number;
  }

interface CartItemState {
    items: ShoppingCartItem[]
}
  
  type ShoppingCartAction =
    | { type: 'ADD_ITEM'; payload: ShoppingCartItem }
    | { type: 'REMOVE_ITEM'; payload: number };

  
  const ShoppingCartReducer = (state: CartItemState, action: ShoppingCartAction): CartItemState => {
    switch (action.type) {
        case 'ADD_ITEM':
            return {...state, items: [...state.items, action.payload] };
        case 'REMOVE_ITEM':
            return {...state, items: state.items.filter(item => item.id !== action.payload)};
        default:
            return state;
    }
  };

export default ShoppingCartReducer;