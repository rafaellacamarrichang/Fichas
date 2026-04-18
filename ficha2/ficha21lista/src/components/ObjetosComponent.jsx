import CardComponent from "./CardComponent";

function ObjetosComponent() {
  const personas = [
    { id: 1, nombre: "Ana", rol: "Frontend" },
    { id: 2, nombre: "Juan", rol: "Backend" },
    { id: 3, nombre: "Lucía", rol: "UX" },
  ];

  return (
    <div>
      {personas.map(function (persona) {
        return (
          <CardComponent
            key={persona.id}
            nombre={persona.nombre}
            rol={persona.rol}
          />
        );
      })}
    </div>
  );
}

export default ObjetosComponent;
