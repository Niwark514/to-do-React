import './AddTask.css';
import React from "react";

function AddTask() {

    return (
        <div className="AddTask">
            <h2>Ajouter une tâche</h2>
            <form>
                <div className={"inputConteneur"}>
                    <label htmlFor="nom">Nouvelle tâche</label>
                    <input className={"input"} type="text" id="nom" name="nom" placeholder={"Saisissez le nom de votre tâche"}/>
                    <small className="message-erreur"></small>
                </div>
                <div className={"inputConteneur"}>
                    <label htmlFor="description">Description</label>
                    <input className={"input"} type="text" id="description" name="description"
                           placeholder={"Saisissez la description de votre tâche"}/>
                </div>
                <div className={"radioConteneur"}>
                    <label htmlFor="haute">Haute</label>
                    <input type="radio" id="haute" name="importance" value="1"/>
                    <label htmlFor="moyenne">Moyenne</label>
                    <input type="radio" id="moyenne" name="importance" value="2"/>
                    <label htmlFor="basse">Basse</label>
                    <input type="radio" id="basse" name="importance" value="3"/>
                    <small className="message-erreur"></small>
                </div>
                <button className={"button btn-ajouter"} type="submit">Ajouter</button>
            </form>
        </div>
    );
}

export default AddTask;