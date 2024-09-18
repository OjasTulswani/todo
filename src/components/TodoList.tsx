import { Todo } from '../model';
import SingleTodo from './SingleTodo';
interface PropsType {
    todos  : Todo[],
    setTodos : React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodoList = ({todos,setTodos} : PropsType) => {
  return (
    <div className="flex justify-evenly w-11/12 flex-wrap">
      {todos.map(todo => (
        <SingleTodo 
        todo={todo}
        key={todo.id}
        todos={todos}
        setTodos={setTodos}
        />

      ))}
    </div>
  )
}

export default TodoList
