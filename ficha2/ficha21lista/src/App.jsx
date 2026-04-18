import PostresComponent from "./components/PostresComponent";
import ObjetosComponent from "./components/ObjetosComponent";
import CardComponent from "./components/CardComponent";
import ListaComponent from "./components/ListaComponent";
function App() {
  return (
    <>
      <div>
        <h2>Postres</h2>
        <PostresComponent />
      </div>

      <div>
        <h2>Personal</h2>
        <ObjetosComponent />
      </div>

      <div>
        <h2>Lista de series</h2>
        <ListaComponent />
      </div>
    </>
  );
}

export default App;
