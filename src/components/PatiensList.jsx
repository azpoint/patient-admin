import PatientCard from "./PatientCard";

function PatiensList() {
    return (
        <div className="md:w-1/2 lg:w-3/5 m-2.5 md:h-screen md:overflow-y-scroll">
            <h2 className="font-bold text-3xl text-center">Patient List</h2>

            <PatientCard/>
            <PatientCard/>
            <PatientCard/>
            <PatientCard/>
            <PatientCard/>
            
        </div>
    );
}
export default PatiensList;
