import Waehrungsumrechner from "./components/Waehrungsumrechner.jsx";
import Waehrungen from "./assets/Waehrungen.jpg";
import "./App.css";

export default function App() {
  return (
      <div>
          <div className={"App-Title"}>
              <h1>Währungsumrechner</h1>
          </div>
          <div className={"App-Content"}>
              <img src={Waehrungen} alt={"Bild von Geld"} width={400}/>
              <Waehrungsumrechner />
          </div>
      </div>
  );
}