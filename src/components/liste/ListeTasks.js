import './ListeTasks.css';
import React from "react";
import Task from "../task/Task";

function ListeTasks({taskList}) {

    return (
        <div className="TaskList">
            <h2>Liste des tâches</h2>
            <div className="todo-list-container">
                <ul className={"todo-list"}>
                    {console.log('Ici j\'ajouterai mes taches')}
                    <Task/>
                </ul>
            </div>

        </div>
    );
}

export default ListeTasks;