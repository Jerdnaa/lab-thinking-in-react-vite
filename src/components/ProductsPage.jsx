import jsonData from "../data.json";
import { useState } from "react";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

const ProductsPage = () => {
  const [products, setProducts] = useState(jsonData);
  const [search, setSearch] = useState("");
  const [checked, setChecked] = useState(false);
  return (
    <>
      <h1>IronStore</h1>
      <SearchBar
        products={products}
        setProducts={setProducts}
        search={search}
        setSearch={setSearch}
        checked={checked}
        setChecked={setChecked}
      />
      <ProductTable products={products} search={search} checked={checked} />
    </>
  );
};

export default ProductsPage;
