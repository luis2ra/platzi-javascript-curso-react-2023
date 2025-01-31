import './CreateTodoButton.css';

function CreateTodoButton() {
  return (
    <button
      className="CreateTodoButton"
      onClick={
        (event) => {
          console.log('le diste click')
          console.log(event)
          console.log(event.target)
        }
      }
    >+</button>
  );
}

export { CreateTodoButton };


// otra forma de hacerlo
function MiBoton() {
  function manejarClick() {
    alert("¡Botón clickeado!");
  }

  return <button onClick={manejarClick}>Haz clic</button>;
}

export { MiBoton };