import PatientCard from "./PatientCard";

function PatiensList({ patients, setPatient }) {
    

    return (
        <div className="md:w-1/2 lg:w-3/5 m-2.5 md:h-screen md:overflow-y-scroll">
            <h2 className="font-bold text-3xl text-center">Patient List</h2>

            {patients && patients.length ? (
                <>
                    {patients.map((patient) => {
                        return (
                            <PatientCard key={patient.id} patient={patient} setPatient={setPatient}/>
                        );
                    })}
                </>
            ) : (
                <>
                    <h2 className="text-indigo-600 text-3xl font-semibold text-center my-5 uppercase">No Patiens</h2>
                    <p className="text-xl text-center font-normal">You may add them using the left panel</p>
                </>
            )}
        </div>
    );
}
export default PatiensList;
