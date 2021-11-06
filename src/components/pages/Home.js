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
            <main className={"home-main"}>

                <AddTask taskList={taskList} setTaskList={setTaskList} inputName={inputName} setInputName={setInputName} inputDescription={inputDescription} setInputDescription={setInputDescription}/>
                <div className={"preview-container"}>
                    <h2>Vous ajoutez la tache suivante : </h2>
                    <small>Nom :</small>
                    <p className={"preview-data"}>{inputName}</p>
                    <small>Description :</small>
                    <p className={"preview-data"}>{inputDescription}</p>

                </div>



                <ListeTasks setTaskList={setTaskList} taskList={taskList}/>

                <DetailTask/>

            </main>

        </div>
    );


}

export default Home;

