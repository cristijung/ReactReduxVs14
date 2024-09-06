import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../store/storeReducer";
import { addTodo, toogleTodo } from "../slice/todoSlice";

export default function ToDo() {
  const dispatch: AppDispatch = useDispatch();
  const todos = useSelector((state: RootState) => state.todos.todos);
  const [newTodo, setNewTodo] = useState("");

  const putAddTodo = () => {
    if (newTodo.trim() !== "") {
      dispatch(addTodo(newTodo));
      setNewTodo("");
    }
  };

  const selectToogleTodo = (id: number) => {
    dispatch(toogleTodo(id));
  };

  return (
    <>
      <section>
        <h2>Lista de tarefas</h2>
        <ul>
          {todos.map((todo) => (
            <li
              key={todo.id}
              onClick={() => selectToogleTodo(todo.id)}
              style={{
                textDecoration: todo.completed ? "line-through" : "nada",
              }}
            >
              {todo.text}
            </li>
          ))}
        </ul>
        <input type='text' value={newTodo} onChange={e => setNewTodo(e.target.value)} />
        <button onClick={putAddTodo}>Adicionar tarefa</button>
      </section>
    </>
  );
}
