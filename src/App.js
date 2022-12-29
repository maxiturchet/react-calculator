import Boton from "./components/Boton";
import "./App.css";
import calculadoraLogo from "./assets/calculadora.png";
import Pantalla from "./components/Pantalla";
import BotonClear from "./components/BotonClear";
import { useState } from "react";
import { evaluate } from "mathjs";

function App() {
  const [input, setInput] = useState(0);
  const [primerTermino, setPrimerTermino] = useState(0);

  const agregarInput = (value) => {
    const ultimoPrimerTermino = primerTermino[primerTermino.length - 1];
    setInput(input === 0 ? value : input + value);
    setPrimerTermino(primerTermino === 0 ? value : primerTermino + value);
    console.log(input.length === undefined);
    console.log(input.length > 0);
    if (
      input.length > 0 &&
      (value === "/" || value === "*" || value === "+" || value === "-")
    ) {
      setInput(' ');
      if (
        ultimoPrimerTermino === "/" ||
        ultimoPrimerTermino === "*" ||
        ultimoPrimerTermino === "+" ||
        ultimoPrimerTermino === "-"
      ) {
        setPrimerTermino(primerTermino.replace(ultimoPrimerTermino, value));
      }
    }
    if (
      input.length === undefined &&
      (value === "/" || value === "*" || value === "+" || value === "-")
    ) {
      setInput(' ');
      setPrimerTermino(0 + value);
    }
  };
//
  const calcularResultado = () => {
    setInput(evaluate(primerTermino));
  };
  return (
    <div className="App">
      <div className="logo-contenedor">
        <h1 className="logo-titulo">Calculadora en React</h1>
        <img
          src={calculadoraLogo}
          className="logo"
          alt="Logo de la calculadora"
        />
      </div>
      <div className="contenedor-calculadora">
        <Pantalla input={input} primerTermino={primerTermino} />
        <div className="fila">
          <Boton handlerClick={agregarInput}>1</Boton>
          <Boton handlerClick={agregarInput}>2</Boton>
          <Boton handlerClick={agregarInput}>3</Boton>
          <Boton handlerClick={agregarInput}>+</Boton>
        </div>
        <div className="fila">
          <Boton handlerClick={agregarInput}>4</Boton>
          <Boton handlerClick={agregarInput}>5</Boton>
          <Boton handlerClick={agregarInput}>6</Boton>
          <Boton handlerClick={agregarInput}>-</Boton>
        </div>
        <div className="fila">
          <Boton handlerClick={agregarInput}>7</Boton>
          <Boton handlerClick={agregarInput}>8</Boton>
          <Boton handlerClick={agregarInput}>9</Boton>
          <Boton handlerClick={agregarInput}>*</Boton>
        </div>
        <div className="fila">
          <Boton handlerClick={calcularResultado}> =</Boton>
          <Boton handlerClick={agregarInput}>0</Boton>
          <Boton handlerClick={agregarInput}>.</Boton>
          <Boton handlerClick={agregarInput}>/</Boton>
        </div>
        <div className="fila">
          <BotonClear
            handlerClear={() => {
              setPrimerTermino(" ");
              setInput(0);
            }}
          >
            Clear
          </BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
