import { useState } from 'react'

import InputField from '../components/InputField'
import { Todo } from '../model';

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
      <div className='w-screen h-screen flex flex-col items-center bg-gray-600 font-neucha'>
          <span className='text-uppercase text-white z-1 text-center mb-10 mt-10 text-4xl md:mb-6 md:mt-6 md:text-3xl'>
            TODO
          </span>
          <InputField todo={todo} setTodo={setTodo} handleAdd = {handleAdd}
           />
      </div>
    </>
  )
}

export default Homepage
