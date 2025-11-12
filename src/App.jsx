import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Footer } from "./components/Footer/Footer";
//import { Header } from "./components/Header/Header";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
//import { Nav } from "./components/Nav/Nav";
import { CartProvider } from "./context/CartContext/CartProvider";
import { Home } from "./pages/Home/Home";
import { Productos } from "./pages/Productos/Productos";
import { Servicios } from "./pages/Servicios/Servicios";
import { Nosotros } from "./pages/Nosotros/Nosotros";
import { DondeEstamos } from "./pages/DondeEstamos/DondeEstamos";
import { Contacto } from "./pages/Contacto/Contacto";
import { Carrito } from "./pages/Carrito/Carrito";
import { ProductFormContainer } from "./components/adminComponents/ProductFormContainer/ProductFormContainer";
import { MainLayout } from "./layouts/MainLayout";
import { AdminLayout } from "./layouts/AdminLayout";
import { RutaProtegida } from "./components/RutaProtegida/RutaProtegida";
import { Login } from "./components/Login/Login";


function App() {
    return (
        <>
            <BrowserRouter>
            <CartProvider>
                <div className="app-container">
                    {/* Dejamos fuera del Routes lo que queremos que no se vuelva a renderizar al navegar */}
                    <Routes>
                        <Route element={<MainLayout/>}>
                            <Route path="/" element={<Home />} />
                            {/*<Route path="/productos" element={<ItemListContainer titulo={"Bienvenidos"} />}/>*/}
                            <Route path="/productos" element={<Productos />}/>
                            <Route path="/servicios" element={<Servicios />} />
                            <Route path="/nosotros" element={<Nosotros />} />
                            <Route path="/donde-estamos" element={<DondeEstamos />} />
                            <Route path="/contacto" element={<Contacto />} />
                            <Route path="/carrito" element={<Carrito />} />
                            <Route path="/detail/:id" element={<ItemDetailContainer />}/>
                            <Route path="/category:category" element={<ItemDetailContainer />}/>
                            {/*<Route path="/admin" element={<ProductFormContainer />} />*/}
                        </Route>
                        <Route path="/admin" element={<AdminLayout/>}>
                            <Route index element={<Login/>}/>
                            <Route path="alta-productos" element={
                                <RutaProtegida>
                                    <ProductFormContainer />
                                </RutaProtegida>}/>
                        </Route>
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
