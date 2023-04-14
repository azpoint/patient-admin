import {useState} from "react"

//Components
import Header from "./components/Header";
import Form from "./components/Form";
import PatiensList from "./components/PatiensList";

function App() {
    const [patients, setPatients] = useState([])

    // eslint-disable-next-line no-unused-vars
    const [patient, setPatient] = useState({})


    return (
        <div className="container w-4/5 mx-auto m-10">
            <Header />
            <div className="mt-12 md:flex">
                <Form patients={patients} setPatients={setPatients} patient={patient}/>
                <PatiensList 
                    patients={patients} setPatient={setPatient}
                />
            </div>
        </div>
    );
}

export default App;
