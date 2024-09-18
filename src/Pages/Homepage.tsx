import { useState } from 'react'

import InputField from '../components/InputField'
import { Todo } from '../model';
import TodoList from '../components/TodoList';

const Homepage = () => {
    //for value
    const [todo, setTodo] = useState<string>("");
    //for storing
    const [todos, setTodos] = useState<Todo[]>([]);

    //handler for add
    const handleAdd = (e:React.FormEvent) => {
        e.preventDefault();

        if(todo){
            setTodos([...todos,{id:Date.now(), todo, isDone:false}]);
            setTodo("");
        }
    };

  return (
    <>
      <div className='flex flex-col items-center  font-neucha'>
          <span className='text-uppercase text-white z-1 text-center mb-10 mt-10 text-4xl md:mb-6 md:mt-6 md:text-3xl'>
            TODO
          </span>
          <InputField todo={todo} setTodo={setTodo} handleAdd = {handleAdd}
           />
          <TodoList todos={todos} setTodos={setTodos}/>
      </div>
    </>
  )
}

export default Homepage
