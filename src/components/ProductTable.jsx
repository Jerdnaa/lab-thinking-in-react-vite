import ProductRow from "./ProductRow";

const ProductTable = ({ products }) => {
  return (
    <>
      <h2>Product Table</h2>
      <ProductRow products={products} />
    </>
  );
};

export default ProductTable;
