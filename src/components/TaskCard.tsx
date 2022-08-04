import { Task } from "../interfaces/Task";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDeleteLeft } from '@fortawesome/free-solid-svg-icons'

interface Props {
    task: Task
}

export default function TaskCard({ task }: Props){
    return <div className="card card-body text-dark">
        <h2>{task.title}</h2>
        <p>{task.id}</p>
        <p>{task.description}</p>
        <button className="btn btn-danger"><FontAwesomeIcon icon={faDeleteLeft} /></button>
        
    </div>
}