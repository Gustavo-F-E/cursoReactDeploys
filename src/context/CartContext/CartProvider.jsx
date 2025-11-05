import { CartContext } from "./CartContext";
import { useState } from "react";

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    const exists = (id) => {
        const exists = cart.some((item) => item.id === id);
        return exists;
    }

    const addItem = (item) => {
        if (exists(item.id)) {
            alert(`El producto ${item.name} ya se encuentra en el carrito`);
            return;
        }
        setCart([...cart, item]);
        alert(`Producto ${item.name} agregado al carrito`);
    };

    const clearCart = () => {
        setCart([]);
    }

    const getTotalItems = () => {
        if (cart.length){
            return cart.length;
        }
        return cart.length; // Esto asegura que siempre devuelve un número, 0 si el carrito está vacío.
    };

    const values = {cart, addItem, clearCart, getTotalItems};
    return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
};