import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoCounter.css';

function TodoCounter() {
  const {totalTodos, completedTodos } = React.useContext(TodoContext)

  return (
    <h2 className='TodoCounter'>Has completado {completedTodos} de {totalTodos} TODOs</h2>
  )
}

// Mejor opción que export default TodoCounter,
// obliga a importarlo con exáctamente el mismo
// nombre que se le dió a la función.
export { TodoCounter };