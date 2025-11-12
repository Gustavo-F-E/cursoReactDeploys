import { useAuthContext } from "../../../context/AuthContext/useAuthContext";
import { useNavigate } from "react-router-dom";

export const ProductFormUI = (
    {product, 
    errors,
    loading,
    onChange,
    onFileChange,
    onSubmit
}) => {
    const { logout } = useAuthContext();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/admin");
    };

    return <section>
        <form className="product-form" onSubmit={onSubmit}>
            <h2>Agregar Producto</h2>
            <div className="product-form-div">
                <label>Nombre:</label> 
                <input type="text" className="product-input" name="name" value={product.name} onChange={onChange} required/> 
                {errors.name && <p className="error">{errors.name}</p>}
            </div>
            <div className="product-form-div">
                <label>Precio:</label> 
                <input type="number" className="product-input" name="price" value={product.price} onChange={onChange} required/> 
                {errors.price && <p className="error">{errors.price}</p>}
            </div>
            {/*<div className="product-form-div">
                <label>Categoría:</label> 
                <input type="text" className="product-input" name="category" value={product.category} onChange={onChange} required/> 
                {errors.category && <p className="error">{errors.category}</p>}
            </div>*/}
            <div className="product-form-div">
                <label>Categoría:</label>
                <select className="product-input" name="category" value={product.category} onChange={onChange} required>
                    <option value="">-- Seleccionar categoría --</option>
                    <option value="Perros">Perros</option>
                    <option value="Gatos">Gatos</option>
                </select>
                {errors.category && <p className="error">{errors.category}</p>}
            </div>
            <div className="product-form-div">
                <label>Descripción:</label> 
                <textarea className="product-input" name="description" value={product.description} onChange={onChange} required/> 
                {errors.description && <p className="error">{errors.description}</p>}
            </div>
                        <div>
                <label>Imagen:</label> 
                <input id="product-input-image" type="file" className="product-input product-input-image" accept="image/*" onChange={(e)=>onFileChange(e.target.files?.[0] ?? null)} required/> 
                {errors.file && <p className="error">{errors.file}</p>}
            </div>
            <button id="guardar" className="btn" type="submit" disabled={loading}>
                {loading ? "Guardando..." : "Guardar"}
            </button>
            <button id="logout" className="btn" type="button" onClick={handleLogout}>
                Cerrar Sesión
            </button>
        </form>
    </section>
}