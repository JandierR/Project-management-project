import NoProjectSelected from './NoProjectSelected';
import NewProject from './NewProject';
import Sidebar from './Sidebar';
import { useState } from 'react';

function App() {
  const [showNewProject, setShowNewProject] = useState(false);

  const handleShowNewProject = () => {
    setShowNewProject(!showNewProject);
  };
  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar onButtonClick={handleShowNewProject} />

      {showNewProject ? (
        <NewProject onButtonClick={handleShowNewProject} />
      ) : (
        <NoProjectSelected onButtonClick={handleShowNewProject} />
      )}
    </main>
  );
}

export default App;
