import {useState} from "react"

//Components
import Header from "./components/Header";
import Form from "./components/Form";
import PatiensList from "./components/PatiensList";

function App() {
    const [patients, setPatients] = useState([])


    return (
        <div className="container w-4/5 mx-auto m-10">
            <Header />
            <div className="mt-12 md:flex">
                <Form patients={patients} setPatients={setPatients} />
                <PatiensList />
            </div>
        </div>
    );
}

export default App;
