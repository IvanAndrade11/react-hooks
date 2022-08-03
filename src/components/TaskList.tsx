import { Task } from '../interfaces/Task';

interface Props {
    tasks: Task[]
}

export default function TaskList({ tasks }: Props){
    return <>
        {
          tasks.map(
            task => <div>{task.title}</div>
          )
        }
    </>
}