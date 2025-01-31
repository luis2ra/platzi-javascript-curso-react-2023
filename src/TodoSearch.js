import './TodoSearch.css';

function TodoSearch() {
  return (
    <input
      placeholder="Cortar cebolla"
      className="TodoSearch"
      onChange={(event) => {
        console.log('Escribiste en el TodoSearch');
        console.log(event);
        console.log(event.target);
        console.log(event.target.value);
      }}
    />
  );
}

export { TodoSearch };


// Otra forma de hacerlo
function InputEjemplo() {
  function manejarCambio(evento) {
    console.log("Valor del input:", evento.target.value);
  }

  return <input type="text" onChange={manejarCambio} />;
}

export { InputEjemplo };
