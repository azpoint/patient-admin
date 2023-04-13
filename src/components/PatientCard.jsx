function PatientCard() {
  return (
    <div className="bg-gray-100 shadow-md rounded-lg pb-10 pt-5 px-5 mt-5">
                <p className="text-center text-xl mb-4">
                    Patient{" "}
                    <span className="text-indigo-600 font-semibold">
                        Card
                    </span>
                </p>
            
            <div>
              <p className="font-semibold uppercase">Name:{" "} <span className="font-normal normal-case">Hook</span></p>

              <p className="font-semibold uppercase">Owner:{" "} <span className="font-normal normal-case">Hook</span></p>

              <p className="font-semibold uppercase">email:{" "} <span className="font-normal normal-case">Hook</span></p>

              <p className="font-semibold uppercase">Discharge Date:{" "} <span className="font-normal normal-case">Hook</span></p>

              <p className="font-semibold uppercase">Notes:{" "} <span className="font-normal normal-case">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates adipisci omnis distinctio laborum, quibusdam velit eligendi sed! Provident, fugiat. Odit, molestias? Ratione aut eveniet facilis nihil architecto voluptatum culpa earum!</span></p>
            </div>
            
            </div>
  )
}
export default PatientCard