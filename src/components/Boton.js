import React from "react";
import '../styles/Boton.css'

const Boton = ({ children, handlerClick }) => {
  const esOperador = (valor) => {
    return isNaN(valor) && valor !== "." && valor !== "=";
  };

  return (
    <button
      className={`boton-contenedor ${esOperador(children) ? "operador" : ''}`.trimEnd()}
      onClick={() => handlerClick(children)}>
      {children}
    </button>
  );
};

export default Boton;
