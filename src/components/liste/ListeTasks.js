import './TaskList.css';
import React from "react";
import Task from "../task/Task";

function ListeTasks({taskList, setTaskList}) {

    return (
        <div className="TaskList">
            <h2>Liste des tâches</h2>
            <div className="task-list-container">
                <ul className={"task-list"}>

                    {taskList.map(task =>(
                        <Task setTaskList={setTaskList} taskList={taskList} task={task} key={task.id} id={task.id} nom={task.nom} description={task.description} completed={task.completed}/>
                    ))}
                </ul>
            </div>

        </div>
    );
}

export default ListeTasks;