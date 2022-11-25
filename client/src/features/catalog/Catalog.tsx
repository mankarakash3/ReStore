import { useEffect, useState } from "react";
import { Product } from "../../app/models/Product";
import ProductList from "./ProductList";

export default function Catalog() {
  const [products, setproducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("https://localhost:5001/api/Products")
      .then((response) => response.json())
      .then((data) => setproducts(data));
  }, []);

  return (
    <>
      <h1>Catalog</h1>
      <ProductList products={products} />
    </>
  );
}
