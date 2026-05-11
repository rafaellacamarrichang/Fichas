import InputComponent from "./components/InputComponent";
import FormularioComponent from "./components/FormularioComponent";
import TarjetaComponent from "./components/TarjetaComponent";
import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="seccion">
        <InputComponent />
      </div>

      <div className="seccion">
        <FormularioComponent />
      </div>

      <div className="seccion">
        <TarjetaComponent />
      </div>
    </div>
  );
}

export default App;
