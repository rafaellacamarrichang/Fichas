import { useState } from "react";

function FormularioComponent() {
  const [nombre, setNombre] = useState("");
  const [edad, setEdad] = useState("");
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
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />

        <input
          type="number"
          placeholder="Edad"
          value={edad}
          onChange={(e) => setEdad(e.target.value)}
        />

        <button type="submit">Enviar</button>
      </form>

      {mostrar === true ? (
        <div>
          <h2>Nombre: {nombre}</h2>
          <h2>Edad: {edad}</h2>
        </div>
      ) : null}
    </div>
  );
}

export default FormularioComponent;
