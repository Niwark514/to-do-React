import './AddTask.css';
import React from "react";

const AddTask = ({
                     inputName,
                     setInputName,
                     inputDescription,
                     setInputDescription,
                     taskList,
                     setTaskList
                 }) => {


    const inputNameHandler = (e) => {
        console.log(e.target.value);

        setInputName(e.target.value);
    }

    const inputDescriptionHandler = (e) => {
        console.log(e.target.value);

        setInputDescription(e.target.value);
    }

    const submitTodoHandler = (e) => {
        e.preventDefault();

        setTaskList([
            ...taskList,
            {
                nom: inputName,
                description: inputDescription,
                id: Math.random() * 1000
            }
        ])
        setInputName("");
        setInputDescription("");
    }
    return (
        <div className="AddTask">
            <h2>Ajouter une tâche</h2>
            <form>
                <div className={"inputConteneur"}>
                    <label htmlFor="nom">Nouvelle tâche</label>
                    <input onChange={inputNameHandler} className={"input"} type="text" id="nom" name="nom"                           placeholder={"Saisissez le nom de votre tâche"} value={inputName}/>
                    <small className="message-erreur"></small>
                </div>
                <div className={"inputConteneur"}>
                    <label htmlFor="description">Description</label>
                    <input onChange={inputDescriptionHandler} className={"input"} type="text" id="description"                           name="description" placeholder={"Saisissez la description de votre tâche"} value={inputDescription}/>
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
                <button onClick={submitTodoHandler} className={"button btn-ajouter"} type="submit">Ajouter</button>
            </form>
        </div>
    );
}

export default AddTask;