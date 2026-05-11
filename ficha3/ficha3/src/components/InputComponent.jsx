import { useState } from "react";

function InputComponent() {
  const [nombre, setNombre] = useState("");

  return (
    <div>
      <input
        type="text"
        placeholder="Escribí tu nombre acá <3"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />

      <h2>{nombre !== "" ? `Hola, ${nombre}` : "Hola"}</h2>
    </div>
  );
}

export default InputComponent;
