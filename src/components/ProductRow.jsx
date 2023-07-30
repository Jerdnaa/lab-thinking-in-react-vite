const ProductRow = ({ products }) => {
  return (
    <>
      <h1>Row</h1>
      <ul>
        {products.map((product) => {
          return (
            <li key={product.id} style={product.inStock ? { color: "black" } : { color: "red" }}>
              {product.name} / {product.price}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ProductRow;
