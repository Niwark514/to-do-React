import './Home.css';
import React, {useEffect, useState} from "react";
import AddTask from "../add/AddTask";
import TaskList from "../liste/TaskList";


function Home() {
    const [inputName, setInputName] = useState("");
    const [inputDescription, setInputDescription] = useState("");
    const [inputPriority, setInputPriority] = useState("");
    const [taskList, setTaskList] = useState([]);

    useEffect(()=>{
        getLocalTaskList();
    }, [])

    useEffect(()=>{
        saveLocalTaskList();
    }, [taskList])

    const saveLocalTaskList = () =>{
        localStorage.setItem('taskList', JSON.stringify(taskList))
    }
    const getLocalTaskList =() => {
        if (localStorage.getItem('taskList') === null){
            localStorage.setItem('taskList', JSON.stringify([]))

        }else {
           let taskListLocal = JSON.parse(localStorage.getItem('taskList'))
            console.log(taskListLocal)
            setTaskList(taskListLocal);
        }
    }


    return (
        <div className="Home">
            <header>
                <h1>Gestionnaire de tâches</h1>
                <p>Un gestionnaire de tâches (to-do-list)</p>
            </header>
            <main className={"home-main"}>

                <AddTask taskList={taskList} setTaskList={setTaskList} inputName={inputName} setInputName={setInputName} inputDescription={inputDescription} setInputDescription={setInputDescription} inputPriority={inputPriority} setInputPriority={setInputPriority}/>
                <div className={"preview-container"}>
                    <h2>Vous ajoutez la tache suivante : </h2>
                    <small>Nom :</small>
                    <p className={"preview-data"}>{inputName}</p>
                    <small>Description :</small>
                    <p className={"preview-data"}>{inputDescription}</p>
                    <small>Priorité :</small>
                    <p className={"preview-data"}>{inputPriority}</p>
                </div>



                <TaskList setTaskList={setTaskList} taskList={taskList}/>



            </main>

        </div>
    );


}

export default Home;

