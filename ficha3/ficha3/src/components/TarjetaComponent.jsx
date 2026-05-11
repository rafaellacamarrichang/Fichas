import { useState } from "react";

function TarjetaComponent() {
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [mostrar, setMostrar] = useState(false);

  const manejarSubmit = (e) => {
    e.preventDefault();
    setMostrar(true);
  };

  return (
    <div>
      <form onSubmit={manejarSubmit}>
        <input
          type="text"
          placeholder="Título"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
        />

        <textarea
          placeholder="Descripción"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
        ></textarea>

        <button type="submit">Crear tarjeta</button>
      </form>

      {mostrar === true ? (
        <div className="tarjeta">
          <h2>{titulo}</h2>
          <p>{descripcion}</p>
        </div>
      ) : null}
    </div>
  );
}

export default TarjetaComponent;
