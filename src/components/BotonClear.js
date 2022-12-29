import '../styles/BotonClear.css'

function BotonClear({children, handlerClear}) {
  return (
    <button className='boton-clear'
      onClick={handlerClear}>
        {children}
    </button>
  )
}

export default BotonClear;