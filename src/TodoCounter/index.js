import React from 'react';
import './TodoCounter.css';


function TodoCounter({total, completed}) {
  return (
    <h2 className='TodoCounter'>Has completado {completed} de {total} TODOs</h2>
  )
}

// Mejor opción que export default TodoCounter,
// obliga a importarlo con exáctamente el mismo
// nombre que se le dió a la función.
export { TodoCounter };