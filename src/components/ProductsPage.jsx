import jsonData from "../data.json";
import { useState } from "react";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

const ProductsPage = () => {
  const [products, setProducts] = useState(jsonData);
  return (
    <>
      <h1>IronStore</h1>
      <SearchBar />
      <ProductTable products={products} />
    </>
  );
};

export default ProductsPage;
