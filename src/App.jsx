import { useState, useEffect } from "react";

//Components
import Header from "./components/Header";
import Form from "./components/Form";
import PatiensList from "./components/PatiensList";

function App() {
    const [patients, setPatients] = useState([]);

    const [patient, setPatient] = useState({});

    useEffect(() => {
        const localStoragePatients = JSON.parse(localStorage.getItem("patients")) ?? []

        if(localStoragePatients.length > 0){
            setPatients(localStoragePatients)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem("patients", JSON.stringify(patients));
    }, [patients]);

    const deletePatient = (id) => {
        const patientsUpdated = patients.filter((patient) => patient.id !== id);

        setPatients(patientsUpdated);
    };

    return (
        <div className="container w-4/5 mx-auto m-10">
            <Header />
            <div className="mt-12 md:flex">
                <Form
                    patients={patients}
                    setPatients={setPatients}
                    patient={patient}
                    setPatient={setPatient}
                />
                <PatiensList
                    patients={patients}
                    setPatient={setPatient}
                    deletePatient={deletePatient}
                />
            </div>
        </div>
    );
}

export default App;
