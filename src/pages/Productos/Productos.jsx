import './Productos.css';
import { ItemListContainer } from "../../components/ItemListContainer/ItemListContainer";

export const Productos = () => {
  return (
    <div className="page-container productos-page">
      <h1>Productos</h1>
      <ItemListContainer/>
    </div>
  );
};