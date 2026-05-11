import { useState } from "react";
import ProductsList from "./components/ProductsList";
import Cart from "./components/Cart";
import "./App.css";

function App() {
  const productos = [
    {
      id: 1,
      nombre: "Organizador para cajón",
      precio: 185,
    },
    {
      id: 2,
      nombre: "Necesser",
      precio: 100,
    },
    {
      id: 3,
      nombre: "Espejo de cartera",
      precio: 60,
    },
    {
      id: 4,
      nombre: "Cepillo tangle-teezer",
      precio: 85,
    },
    {
      id: 5,
      nombre: "Gorra para el pelo de satén",
      precio: 90,
    },
    {
      id: 6,
      nombre: "Tacho de basura para escritorio",
      precio: 120,
    },
  ];

  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (producto) => {
    setCarrito([...carrito, producto]);
  };

  return (
    <div className="container">
      <h1>Tienda Deco - Ficha 4</h1>

      <ProductsList productos={productos} agregarAlCarrito={agregarAlCarrito} />

      <Cart carrito={carrito} />
    </div>
  );
}

export default App;
