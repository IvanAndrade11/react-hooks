import './App.css';
import { useState } from 'react';
import logo from './logo.svg';
import { Task } from './interfaces/Task';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';

interface Props {
  title: string
}

function App({ title }: Props) {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: 1,
      title: "First Task",
      description: "This is the description",
      completed: false
    }
  ]);

  const addNewTask = (task: Task) => setTasks([...tasks, task]);

  return (
    <div className="bg-dark text-white" style={{ height: '100vh' }}>

      <nav className='navbar navbar-dark bg-primary'>
        <div className="container">
          <a href="/" className='navbar-brand'>
            <img src={logo} alt="Logo React" style={{ width: '5rem' }} />
            {title}
          </a>
        </div>
      </nav>

      <main className="container p4 mt-4">
        <div className="row">
          <div className="col-md-4">
            <TaskForm addNewTask={addNewTask} />
          </div>
          <div className="col-md-8">
            <div className="row">
              <TaskList tasks={tasks} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
