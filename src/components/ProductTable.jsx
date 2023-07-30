import ProductRow from "./ProductRow";

const ProductTable = ({ products, search, checked }) => {
  return (
    <>
      <h2>Product Table</h2>
      <ProductRow products={products} search={search} checked={checked} />
    </>
  );
};

export default ProductTable;
