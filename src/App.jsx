import NoProjectSelected from './NoProjectSelected';
import NewProject from './NewProject';
import Sidebar from './Sidebar';
import { useState } from 'react';
import SelectedProject from './SelectedProject';

function App() {
  //Parent component
  const [projectsState, setProjectsState] = useState({
    //Store the projects
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
  });
  const selectedProject = projectsState.projects.find(
    (project) => project.id === projectsState.selectedProjectId,
  );

  function handleAddTask(text) {
    setProjectsState((prevState) => {
      const taskId = Math.random();
      const newTask = {
        text: text,
        project: prevState.selectedProjectId,
        id: taskId,
      };

      return {
        ...prevState,
        tasks: [...prevState.tasks, newTask],
      };
    });
  }

  function handleDeleteTask(taskId) {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter((task) => task.id !== taskId),
      };
    });
  }

  function handleCancelAddProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      };
    });
  }

  function handleStartAddProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }

  function handleShowProject(selectedProjectId) {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: selectedProjectId,
        tasks: prevState.tasks,
      };
    });
  }

  function handleAddProject(projectData) {
    setProjectsState((prevState) => {
      const projectId = Math.random();
      const newProject = {
        ...projectData,
        id: projectId,
      };

      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  }

  function handleDeleteProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter(
          (project) => project.id !== prevState.selectedProjectId,
        ),
      };
    });
  }

  const filteredTasks = projectsState.tasks.filter(
    (task) => task.project === projectsState.selectedProjectId,
  );

  let content = (
    <SelectedProject
      project={selectedProject}
      onDeleteProject={handleDeleteProject}
      onAddTask={handleAddTask}
      onDeleteTask={handleDeleteTask}
      tasks={filteredTasks}
    />
  );

  if (projectsState.selectedProjectId === null) {
    content = (
      <NewProject
        cancelButton={handleCancelAddProject}
        onAdd={handleAddProject}
      />
    );
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar
        onStartAddProject={handleStartAddProject}
        showSelectedProject={handleShowProject}
        projects={projectsState.projects} //Pass projects
      />
      {content}
    </main>
  );
}

export default App;
