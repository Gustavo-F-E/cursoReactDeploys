import "./Cart.css"
import {Item} from "../Item/Item";
import {useCartContext} from "../../context/CartContext/useCartContext";
import { Link } from "react-router-dom";

export const Cart = () => {
    const {cart, clearCart, deleteItem, total, checkout} = useCartContext();
    
    return (
        <section className="item-list-container">
            <h2>Carrito de Compras</h2>
            {cart.length ? (
                    cart.map((prod) => (
                        <Item key={prod.id} {...prod}>
                            <span>Cantidad: {prod.quantity}</span>
                            <button className="btn btn-delete" onClick={() => deleteItem(prod.id)}>
                                Eliminar
                            </button>
                        </Item>
                    ))
            ) : (
                <p>El carrito está vacío</p>
            )}
    {cart.length ? (
        <div className="btn-container">
            <p className="total">Total a pagar: ${total()}</p>
            <button className="btn btn-clear" onClick={clearCart}>Vaciar Carrito</button>
            <button className="btn btn-checkout" onClick={checkout}>Finalizar Compra</button>
        </div>
    ) : (
        <Link to={"/"} className="btn btn-back">
            Volver al Inicio
        </Link>
    )}
        </section>
    );
};