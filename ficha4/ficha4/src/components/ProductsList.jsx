import ProductsCards from "./ProductsCards";

function ProductsList({ productos, agregarAlCarrito }) {
  return (
    <div className="products-container">
      {productos.map((producto) => (
        <ProductsCards
          key={producto.id}
          producto={producto}
          agregarAlCarrito={agregarAlCarrito}
        />
      ))}
    </div>
  );
}

export default ProductsList;
