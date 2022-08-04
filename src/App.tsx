import './App.css';
import { useState } from 'react';
import logo from './logo.svg';
import { Task } from './interfaces/Task';
import TaskList from './components/TaskList';

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

  return (
    <div className="bg-dark text-white" style={{height: '100vh'}}>

      <nav className='navbar navbar-dark bg-primary'>
        <div className="container">
          <a href="/" className='navbar-brand'>
            <img src={logo} alt="Logo React" style={{ width: '5rem' }}/>
            {title}
          </a>
        </div>
      </nav>

      <main className="container p4">
        <div className="col-md-4">

        </div>
        <div className="col-md-8">
          <div className="row">
            <TaskList tasks={ tasks }/>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
