import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { Nav } from "./components/Nav/Nav";
import { CartProvider } from "./context/CartContext/CartProvider";
import { Home } from "./pages/Home/Home";
import { Productos } from "./pages/Productos/Productos";
import { Servicios } from "./pages/Servicios/Servicios";
import { Nosotros } from "./pages/Nosotros/Nosotros";
import { DondeEstamos } from "./pages/DondeEstamos/DondeEstamos";
import { Contacto } from "./pages/Contacto/Contacto";
import { Carrito } from "./pages/Carrito/Carrito";

function App() {
    return (
        <>
            <BrowserRouter>
            <CartProvider>
                <div className="app-container">
                    <Header />
                    <Nav />
                    {/* Dejamos fuera del Routes lo que queremos que no se vuelva a renderizar al navegar */}
                    <Routes>
                        <Route path="/" element={<Home />} />
                        {/*<Route path="/productos" element={<ItemListContainer titulo={"Bienvenidos"} />}/>*/}
                        <Route path="/productos" element={<Productos />}/>
                        <Route path="/servicios" element={<Servicios />} />
                        <Route path="/nosotros" element={<Nosotros />} />
                        <Route path="/donde-estamos" element={<DondeEstamos />} />
                        <Route path="/contacto" element={<Contacto />} />
                        <Route path="/carrito" element={<Carrito />} />
                        <Route path="/detail/:id" element={<ItemDetailContainer />}/>
                    </Routes>
                    {/* Dejamos fuera del Routes lo que queremos que no se vuelva a renderizar al navegar */}
                    <Footer />
                </div>
                </CartProvider>
            </BrowserRouter>
        </>
    );
}

export default App;
