const ProductRow = ({ products, search, checked }) => {
  return (
    <>
      <h1>Row</h1>
      <ul>
        {products
          .filter((product) => {
            return (
              product.name.toLowerCase().includes(search.toLowerCase()) &&
              (!checked || product.inStock)
            );
          })
          .map((product) => {
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
