import NoProjectSelected from './NoProjectSelected';
import NewProject from './NewProject';
import Sidebar from './Sidebar';
import { useState } from 'react';

function App() {
  //The behavior when using this state is that each project has its own id, so when we select a project, that project is going to be shown, instead of NoProjectSelected or NewProject.
  const [showProject, setShowNewProject] = useState(false);

  const handleShowNewProject = () => {
    setShowNewProject(!showProject);
  };
  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar onButtonClick={handleShowNewProject} />

      {showProject ? (
        <NewProject onButtonClick={handleShowNewProject} />
      ) : (
        <NoProjectSelected onButtonClick={handleShowNewProject} />
      )}
    </main>
  );
}

export default App;
