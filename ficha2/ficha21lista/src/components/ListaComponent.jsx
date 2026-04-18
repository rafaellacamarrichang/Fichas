import { useState } from "react";
function ListaComponent() {
  const series = [
    "Homeland",
    "The Emperor of Ocean Park",
    "Reasonable Doubt",
    "Young Sheldon",
    "Little Fires Everywhere",
    "Succession",
  ];
  const [mostrar, setMostrar] = useState(true);
  return (
    <div>
      {mostrar && (
        <ul>
          {series.map((serie, index) => (
            <li key={index}>{serie}</li>
          ))}
        </ul>
      )}

      <button onClick={() => setMostrar(!mostrar)}>
        {mostrar ? "Ocultar" : "Mostrar"}
      </button>
    </div>
  );
}
export default ListaComponent;
