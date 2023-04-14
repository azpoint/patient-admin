import { useState, useEffect } from "react";

//Components
import Error from "./Error";

function Form({patients, setPatients, patient}) {
    const [name, setName] = useState("");
    const [owner, setOwner] = useState("");
    const [email, setEmail] = useState("");
    const [date, setDate] = useState("");
    const [notes, setNotes] = useState("");

    const [error, setError] = useState(false)

    useEffect(() => {
        if(Object.keys(patient).length > 0) {
            setName(patient.name)
            setOwner(patient.owner)
            setEmail(patient.email)
            setDate(patient.date)
            setNotes(patient.notes)
        }
    }, [patient])

    const idGen = () => {
        const random = Math.random().toString(36).substr(2)
        const date = Date.now().toString(36)

        return random + date
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        //Form Validation
        if([name, owner, email, date, notes].includes("")) {
          setError(true)
          setTimeout(() => {
            setError(false)
          }, 3000);

          return;
        }

        //Patient Data
        const patientData = {
          name,
          owner,
          email,
          date,
          notes,
          id: idGen()
        }

        setPatients([...patients, patientData])

        //Reset form values
        setName("")
        setOwner("")
        setEmail("")
        setDate("")
        setNotes("")

    };

    return (
        <div className="md:w-1/2 lg:w-2/5 m-2.5">
            <h2 className="font-bold text-3xl text-center">
                Patient Monitoring
            </h2>

            <form
                onSubmit={handleSubmit}
                className="bg-gray-100 shadow-md rounded-lg pb-10 pt-5 px-5 mt-5"
            >
                <p className="text-center text-xl mb-4">
                    Patient{" "}
                    <span className="text-indigo-600 font-semibold">
                        Editor
                    </span>
                </p>
                <div>
                    <label
                        htmlFor="pet-name"
                        className="block text-gray-700 uppercase font-semibold"
                    >
                        Pet Name
                    </label>
                    <input
                        type="text"
                        id="pet-name"
                        placeholder="Pet Name"
                        className="border-2 w-full p-2 my-2 placeholder-gray-400 rounded-md focus:outline-none focus:border-indigo-600 bg-gray-50"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>

                <div>
                    <label
                        htmlFor="owner-name"
                        className="block text-gray-700 uppercase font-semibold"
                    >
                        Owner Name
                    </label>
                    <input
                        type="text"
                        id="owner-name"
                        placeholder="Owner Name"
                        className="border-2 w-full p-2 my-2 placeholder-gray-400 rounded-md focus:outline-none focus:border-indigo-600 bg-gray-50"
                        value={owner}
                        onChange={(e) => setOwner(e.target.value)}
                    />
                </div>

                <div>
                    <label
                        htmlFor="email"
                        className="block text-gray-700 uppercase font-semibold"
                    >
                        Contact email
                    </label>
                    <input
                        type="email"
                        id="email"
                        placeholder="contact@mail.com"
                        className="border-2 w-full p-2 my-2 placeholder-gray-400 rounded-md focus:outline-none focus:border-indigo-600 bg-gray-50"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div>
                    <label
                        htmlFor="medical-discharge"
                        className="block text-gray-700 uppercase font-semibold"
                    >
                        Medical Discharge
                    </label>
                    <input
                        type="date"
                        id="medical-discharge"
                        placeholder="contact@mail.com"
                        className="border-2 w-full p-2 my-2 placeholder-gray-400 rounded-md focus:outline-none focus:border-indigo-600 bg-gray-50"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                    />
                </div>

                <div>
                    <label
                        htmlFor="notes"
                        className="block text-gray-700 uppercase font-semibold"
                    >
                        Notes
                    </label>
                    <textarea
                        id="notes"
                        placeholder="Medical notes"
                        className="border-2 w-full p-2 my-2 placeholder-gray-400 rounded-md focus:outline-none focus:border-indigo-600 bg-gray-50"
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                    />
                </div>

                <input
                    type="submit"
                    value={patient.id ? "EDIT PATIENT" : "ADD PATIENT"}
                    className="bg-indigo-600 rounded-md w-full p-3 text-gray-50 hover:bg-indigo-400 cursor-pointer transition duration-200"
                />

                {error && (
                  <Error message={"All fields must be filled"} />
                )}
            </form>
        </div>
    );
}
export default Form;
