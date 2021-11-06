import './Home.css';
import React, {useState} from "react";
import AddTask from "../add/AddTask";
import ListeTasks from "../liste/ListeTasks";
import DetailTask from "../detail/DetailTask";

function Home() {
    const [inputName, setInputName] = useState("");
    const [inputDescription, setInputDescription] = useState("");
    const [taskList, setTaskList] = useState([]);
    return (
        <div className="Home">
            <header>
                <h1>Gestionnaire de tâches</h1>
                <p>Un gestionnaire de tâches (to-do-list)</p>
            </header>
            <main>

                <AddTask taskList={taskList} setTaskList={setTaskList} inputName={inputName} setInputName={setInputName} inputDescription={inputDescription} setInputDescription={setInputDescription}/>
                <h2>Vous ajoutez la tache suivante : </h2>
                <p>Nom : {inputName}</p>
                <p>Description : {inputDescription}</p>


                <ListeTasks taskList={taskList}/>

                <DetailTask/>

            </main>

        </div>
    );


}

export default Home;

