import {useState} from 'react'
import { Todo } from "../model";
import { CiEdit } from "react-icons/ci";
import { MdDoneOutline, MdOutlineDeleteForever } from "react-icons/md";
interface PropsType {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}



const SingleTodo = ({ todo, todos, setTodos }: PropsType) => {

  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);  
  const handleDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const handleDelete = (id : number) => {
    setTodos(
        todos.filter((todo) => todo.id !== id)
    );
  };

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
    );
    setEdit(false);
  };

  return (
    <form className="bg-gradient-to-r from-cyan-700 to-blue-800 w11/10 flex rounded-md p-5 mt-4 text-white" onSubmit={(e) => handleEdit(e, todo.id)}>
        {   edit ? (
            <input
            value={editTodo}
            onChange={(e) => setEditTodo(e.target.value)}
            className="bg-gradient-to-r from-cyan-700 to-blue-800 flex-1 p-2 border-0 text-xl focus:outline-none"
            />
        ):

            todo.isDone ? (
                <s className="flex-1 p-2 border-0 text-xl focus:outline-none">
                    {todo.todo}
                 </s>
            ) : (
                <span className="flex-1 p-2 border-0 text-xl focus:outline-none">
                   {todo.todo}
                </span>
            )
        }
      
      
      <span className="ml-4 text-3xl cursor-pointer" onClick={() => {
            if (!edit && !todo.isDone) {
              setEdit(!edit);
            }
          }}>
        <CiEdit />
      </span>
      <span className="ml-4 text-3xl cursor-pointer">
        <MdOutlineDeleteForever
        onClick={() => handleDelete(todo.id)}
        />
      </span>
      <span
        className="ml-4 text-3xl cursor-pointer"
        onClick={() => handleDone(todo.id)}
      >
        <MdDoneOutline />{" "}
      </span>
    </form>
  );
};

export default SingleTodo;
