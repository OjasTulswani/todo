import { useRef } from "react";
interface PropsType {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd:(e:React.FormEvent) => void;
}

const InputField = ({todo, setTodo, handleAdd} : PropsType) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <form className="flex w-9/10 relative items-center" onSubmit={(e) => { 
      handleAdd(e);
      inputRef.current?.blur();
    }}>
      <input
        type="text"
        value={todo}
        ref={inputRef}
        onChange={(e) => setTodo(e.target.value)}
        placeholder=" Enter your ToDo"
        className="w-full rounded-full px-6 py-5 text-xl border-0 transition duration-200 shadow-inner shadow-black focus:shadow-2xl focus:shadow-black/50 focus:outline-none"
      />
      <button
        type="submit"
        className="absolute w-12 h-12 m-3 rounded-full right-0 border-0 text-sm bg-[#2f74c0] text-white transition duration-200 shadow-md hover:bg-[#388ae2] active:scale-90 active:shadow-sm"
      >
        GO
      </button>
    </form>
  );
};

export default InputField;
