import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave, faBan } from '@fortawesome/free-solid-svg-icons';
import { ChangeEvent, useState, useRef } from 'react';

type HandleInputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>

export default function TaskForm() {

    const [task, setTask] = useState({
        title: '',
        description: ''
    });

    const handleInputChange = ({ target: { name, value } }: HandleInputChange) => {
        setTask({ 
            ...task, [name]: value 
        })
    }

    const form = useRef<HTMLFormElement>(null);

    return <>
        <div className="card card-body text-dark">
            <form ref={form} action="#">
                <h1>Task Form</h1>
                <hr />
                <input
                    type="text"
                    name="title"
                    className="form-control mb-3"
                    placeholder="Enter a title"
                    onChange={handleInputChange}
                />
                <textarea
                    name="description"
                    rows={2}
                    placeholder="Write a description"
                    className="form-control mb-3"
                    onChange={handleInputChange}
                />
                <div className="text-center">
                    <button className="btn btn-primary px-5">
                        <FontAwesomeIcon icon={faSave} /> Save
                    </button>
                    <button 
                        className='btn btn-secondary px-5 ms-2'
                        onClick={()=>form.current?.reset()}
                    >
                        <FontAwesomeIcon icon={faBan} /> Clear
                    </button>
                </div>
            </form>
        </div>
    </>
}