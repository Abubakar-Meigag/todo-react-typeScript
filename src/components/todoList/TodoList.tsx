import React, { useState } from 'react'
import data from '../.././database/data.json';
import InputTodo from '../inputTodo/InputTodo';

const TodoList = () => {
      const [todo, setTodo] = useState([])



  return (
    <div>
      <div>
            <InputTodo />
      </div>




    </div>
  )
}

export default TodoList