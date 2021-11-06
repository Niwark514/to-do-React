import './Task.css';
import React from 'react';

function Task  () {
    return (
        <div className={"task"}>
<li className={"task-item"}>
    <p>ID d'une tache : </p>
    <p>Nomd'une tache : </p>
    <p>Description d'une tache :</p>
</li>
            <button className={"btn-check"}>Fait</button>
            <button className={"btn-delete"}>Supprimer</button>
        </div>
    );
};

export default Task;