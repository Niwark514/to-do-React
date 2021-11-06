import './Task.css';
import React from 'react';

function Task({taskList, setTaskList, task, completed}) {

    const deleteHandler =()=> {
        console.log('tache supprimée')
        setTaskList(taskList.filter((el)=>el.id !== task.id))
    }

    const doneHandler =()=> {
        console.log('tache terminée')
        setTaskList(taskList.map(item => {
            if(item.id === task.id){
                return {
                    ...item, completed: !item.completed
                }
            }
            return item;

        }))
    }

    return (
        <div className={"Task"}>
            <li className={`task-item ${task.completed ? 'task-completed': ''}`}>
                <div className={"task-data"}>
                    <small>ID :</small>
                    <p className={"task-data-id"}>{task.id}</p>
                </div>
                <div className={"task-data"}>
                    <small>Nom :</small>
                    <p className={"task-data-name"}>{task.nom}</p>
                </div>
                <div className={"task-data"}>
                    <small>Description:</small>
                    <p className={"task-data-description"}>{task.description}</p>
                </div>
            </li>
            <div className={"btn-section"}>
                <button onClick={doneHandler} className={`button btn-check ${task.completed ? 'btn-completed': ''}`}>{task.completed ? 'C\'est fait': 'À faire'}</button>
                <button onClick={deleteHandler} className={"button btn-delete"}>Supprimer</button>
            </div>

        </div>
    );
};

export default Task;