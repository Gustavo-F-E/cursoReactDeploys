import { useEffect, useState } from "react";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

export const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const {category} = useParams();
  const end_point = 'https://6911d50f52a60f10c81f72e3.mockapi.io/products' //"/data/products.json"


  useEffect(() => {
    fetch(end_point)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Hubo un problema al buscar productos");
        }
        return res.json();
      })
      .then((data) => {
        if (category) {
          const filtered = data.filter((prod) => prod.category === category);
          setProducts(filtered);
          return;
        }
        setProducts(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [category]);

  return (
    <section>
      <ItemList lista={products} />
    </section>
  );
};
