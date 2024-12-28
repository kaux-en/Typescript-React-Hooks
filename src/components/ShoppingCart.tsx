import React, { useState, useReducer } from 'react';
import ShoppingCartReducer from '../CartReducer';


const ShoppingCart: React.FC = () => {
    const [state, dispatch] = useReducer(ShoppingCartReducer, { items: [] })
    const [itemName, setItemName] = useState('');
    const [itemPrice, setItemPrice] = useState<number | null>(null)


    const addItem = (e: React.FormEvent) => {
        e.preventDefault();
        const newItem = {id: Date.now(), name: itemName, price: itemPrice }
        dispatch({ type: 'ADD_ITEM', payload: newItem})
        setItemName('')
        setItemPrice(null)
    }

    const removeItem = (itemId: number) => {
        dispatch({ type: 'REMOVE_ITEM', payload: itemId})
    }

    return (
        <div>
            <form onSubmit={addItem}>
                <input 
                    type="text"
                    value={itemName}
                    onChange={(e) => setItemName(e.target.value)}
                    placeholder="Enter item name"
                     />
                <input 
                    type="number"
                    value={itemPrice}
                    onChange={(e) => setItemPrice(e.target.value)}
                    placeholder="Enter item price"
                     />
                    <button type="submit">Add Item</button>
            </form>

            <ul>
                {state.items.map((item) => (
                    <li key={item.id}>
                        {item.name}-{item.price}{' '}
                        <button onClick={() => removeItem(item.id)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    )
};

export default ShoppingCart;