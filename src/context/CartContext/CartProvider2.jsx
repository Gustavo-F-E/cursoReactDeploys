import { CartContext } from "./CartContext";
import { useState } from "react";

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    //Cambiamos la lógica de las funciones SI usamos el Cout para agregar "Cantidad"

    const exists = (id) => {
        const exists = cart.some((item) => item.id === id);
        return exists;
    }

    const addItem = (item) => {
        if (exists(item.id)) {
            //uso map (q me genera una 'copia' del array original) para cuidar la mutacion al nivel de array
            const updateCart = cart.map((prod) => {
                //si el item del carrito es el mismo q quiero agregar, le actualizo la cantidad
                if (prod.id === item.id) {
                    //cuido mutacion a nivel del objeto
                    return { ...prod, quantity: prod.quantity + item.quantity };
                } else {
                    return prod; //sino lo dejo igual
                }
            });
            setCart(updateCart);
            alert(`Se actualizaron las cantidades del producto ${item.name} en el carrito`);
        } else{
        setCart([...cart, item]);
        alert(`Producto ${item.name} agregado al carrito`);
        }
    };

    //Eliminar un solo producto del carrito
    const deleteItem = (id) => {
        const filtered= cart.filter((prod) => prod.id !== id);
        setCart(filtered);
        alert(`Producto eliminado del carrito`);
    }

    //Eliminar todo el carrito
    const clearCart = () => {
        setCart([]);
    }

    const getTotalItems = () => {
/*         if (cart.length){
            return cart.length;
        } */
        const totalItems= cart.reduce((acc, prod) => acc + prod.quantity, 0);
        return totalItems;
    };

    //Calcular el total a pagar
    const total=()=> {
    const total= cart.reduce((acc, prod) => acc + prod.price * prod.quantity, 0);
    return Math.round(total * 100) / 100;
    };

    const getItemQuantity = (id) => {
        const item = cart.find(prod => prod.id === id);
        return item ? item.quantity : 0;
    };

    const values = {cart, addItem, clearCart, getTotalItems, deleteItem, total, getItemQuantity};
    return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
};