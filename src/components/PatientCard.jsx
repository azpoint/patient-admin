function PatientCard({ patient, setPatient }) {
    const { name, owner, email, date, notes } = patient;

    return (
        <div className="bg-gray-100 shadow-md rounded-lg pb-10 pt-5 px-5 mt-5">
            <p className="text-center text-xl mb-4">
                {name}{" "}
                <span className="text-indigo-600 font-semibold">Card</span>
            </p>

            <div>
                <p className="font-semibold uppercase">
                    Name:{" "}
                    <span className="font-normal normal-case">{name}</span>
                </p>

                <p className="font-semibold uppercase">
                    Owner:{" "}
                    <span className="font-normal normal-case">{owner}</span>
                </p>

                <p className="font-semibold uppercase">
                    email:{" "}
                    <span className="font-normal normal-case">{email}</span>
                </p>

                <p className="font-semibold uppercase">
                    Discharge Date:{" "}
                    <span className="font-normal normal-case">{date}</span>
                </p>

                <p className="font-semibold uppercase">
                    Notes:{" "}
                    <span className="font-normal normal-case">{notes}</span>
                </p>
            </div>

            <div className="flex justify-between mt-3">
                <button
                    type="button"
                    className="bg-indigo-600 hover:bg-indigo-400 text-gray-50 px-4 py-2 rounded-md uppercase font-semibold"
                    onClick={() => setPatient(patient)}
                >
                    Edit
                </button>

                <button
                    type="button"
                    className="bg-red-600 hover:bg-red-400 text-gray-50 px-4 py-2 rounded-md uppercase font-semibold"
                >
                    Delete
                </button>
            </div>
        </div>
    );
}
export default PatientCard;
