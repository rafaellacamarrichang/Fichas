function ProductsCards({ producto, agregarAlCarrito }) {
  return (
    <div className="card">
      <h2>{producto.nombre}</h2>

      <p>${producto.precio}</p>

      <button onClick={() => agregarAlCarrito(producto)}>
        Agregar a mi carrito
      </button>
    </div>
  );
}

export default ProductsCards;
