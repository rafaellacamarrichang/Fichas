import { useState } from "react";

function App() {
  const [contador, setContador] = useState(0);
  const [mostrar, setMostrar] = useState(false);

  return (
    <div>
      <h2>Contador</h2>

      <p>{contador}</p>

      <button onClick={() => setContador(contador + 1)}>+</button>

      <button
        onClick={() => {
          if (contador > 0) setContador(contador - 1);
        }}
      >
        -
      </button>

      <button onClick={() => setMostrar(!mostrar)}>Descubrir</button>

      {mostrar && <p>Tengo hambre</p>}
    </div>
  );
}

export default App;
