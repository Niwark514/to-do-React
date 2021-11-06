import './Task.css';
import React from 'react';

function Task({id, nom, description, completed}) {
    return (
        <div className={"Task"}>
            <li className={"task-item"}>
                <div className={"task-data"}>
                    <small>ID :</small>
                    <p className={"task-data-id"}>{id}</p>
                </div>
                <div className={"task-data"}>
                    <small>Nom :</small>
                    <p className={"task-data-name"}>{nom}</p>
                </div>
                <div className={"task-data"}>
                    <small>Description:</small>
                    <p className={"task-data-description"}>{description}</p>
                </div>



            </li>
            <div className={"btn-section"}>
                <button className={"button btn-check"}>Fait</button>
                <button className={"button btn-delete"}>Supprimer</button>
            </div>

        </div>
    );
};

export default Task;