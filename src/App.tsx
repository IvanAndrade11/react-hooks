import './App.css';
import { useState } from 'react';

interface Props {
  title: string
}

interface Task {
  id: number
  title: string
  description: string
  completed: boolean
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
    <div className="App">
      <h1>{title}</h1>
      {
        tasks.map(
          task => <div>{task.title}</div>
        )
      }
    </div>
  );
}

export default App;
