import { useRef, useState } from 'react';
// import Task from './Task';
export default function Tasks({ onAdd, onDelete, tasks }) {
  const task = useRef();
  const [enteredTask, setEnteredTask] = useState();

  function handleChange(event) {
    setEnteredTask(event.target.value);
  }

  function handleClick() {
    onAdd(enteredTask);
    setEnteredTask('');
  }

  return (
    <section>
      <h1 className="text-3xl font-bold text-stone-600 mb-2">Tasks</h1>
      <div className="flex items-center justify-between">
        <input
          type="text"
          className="w-64 px-2 py-1 rounded-sm bg-stone-200"
          onChange={handleChange}
          value={enteredTask}></input>
        <button
          onClick={handleClick}
          className="text-stone-800 hover:text-stone-950">
          Add Task
        </button>
      </div>
      {tasks.length === 0 && (
        <p className="text-stone-400 mb-4">
          This project does not have any tasks yet.
        </p>
      )}
      {tasks.length > 0 && (
        <ul className="p-4 mt-8 rounded-md bg-stone-100">
          {tasks.map((task) => {
            return (
              <li key={task.id} className="flex justify-between my-4">
                <span>{task.text}</span>
                <button
                  onClick={() => onDelete(task.id)}
                  className="text-stone-700 hover:text-red-500">
                  Clear
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
}
