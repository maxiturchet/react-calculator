import "../styles/Pantalla.css";

const Pantalla = ({ input, primerTermino }) => {  
  return (
  <div className="contenedor-input">
    <div className={'primerTermino'}>
      {primerTermino}
    </div>
    <div className="input">
      {input}
    </div>
  </div>
)};

export default Pantalla;
