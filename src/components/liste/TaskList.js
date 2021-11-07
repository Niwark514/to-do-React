import './TaskList.css';
import React from "react";
import Task from "../task/Task";

function TaskList({taskList, setTaskList}) {

    return (
        <div className={`TaskList ${taskList[0] ? '' : 'empty-list'}`}>
            <h2>Liste des tâches</h2>
            <div className="task-list-container">
                <ul className={"task-list"}>
                    {taskList.map(task =>(
                        <Task setTaskList={setTaskList} taskList={taskList} task={task} key={task.id}/>
                    ))}
                </ul>
            </div>

        </div>
    );
}

export default TaskList;