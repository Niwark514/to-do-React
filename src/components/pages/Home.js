import './Home.css';
import React from "react";
import AddTask from "../add/AddTask";
import ListeTasks from "../liste/ListeTasks";
import DetailTask from "../detail/DetailTask";

function Home() {

    return (
        <div className="Home">
            <header>
                <h1>Gestionnaire de tâches</h1>
                <p>Un gestionnaire de tâches (to-do-list)</p>
            </header>
            <main>

                <AddTask/>

                <ListeTasks/>

                <DetailTask/>

            </main>

        </div>
    );


}

export default Home;

