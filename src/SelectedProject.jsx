import { useState } from 'react';
import Tasks from './Tasks';

export default function SelectedProject({
  project,
  onDeleteProject,
  onAddTask,
  onDeleteTask,
  tasks,
}) {
  //Quede en esto de agregar el state y ref para guardar tasks tal como guardar proyectos
  function handleAddTask(taskTitle) {
    setTask((prevState) => {
      const taskId = Math.random();
      const newTask = { task: taskTitle, id: taskId };
      return { ...prevState, tasks: [...prevState.tasks, newTask] };
    });
  }

  return (
    <div className="w-[35rem] mt-16">
      <header className="pb-4 mb-4 border-b-2 border-stone-300">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-stone-600 mb-2">
            {project.title}
          </h1>
          <button
            onClick={onDeleteProject}
            className="text-stone-600 hover:text-stone-950">
            Delete
          </button>
        </div>
        <p className="mb-4 text-stone-400">{project.dueDate}</p>
        <p className="text-stone-600 whitespace-pre-wrap">
          {project.description}
        </p>
      </header>
      <Tasks onAdd={onAddTask} onDelete={onDeleteTask} tasks={tasks} />
    </div>
  );
}
