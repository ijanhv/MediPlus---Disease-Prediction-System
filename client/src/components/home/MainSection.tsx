import { UserCircleIcon } from "@heroicons/react/24/solid";

const patientDetails = {
  name: "Smith Adams",
  dob: "23.04.1999",
  address: "Ghatkopar, Mumbai",
  maritalStatus: "Married",
  insurance: "Med right",
  adharNo: "9878766666",
  phoneNo: "+91 9132112223",
  gender: "Male",
  registeredOn: "3 Oct 2019",
};

const appoitnmentDetails = [
  {
    date: "1.02.2023",
    symptoms: "lorem ipsum",
    category: "Follow up",
    doctor: "Positive",
    status: "Confirmed",
  },
  {
    date: "1.02.2023",
    symptoms: "lorem ipsum",
    category: "Follow up",
    doctor: "Positive",
    status: "Confirmed",
  },
  {
    date: "1.02.2023",
    symptoms: "lorem ipsum",
    category: "Follow up",
    doctor: "Negative",
    status: "Confirmed",
  },
  {
    date: "1.02.2023",
    symptoms: "lorem ipsum",
    category: "Follow up",
    doctor: "Positive",
    status: "Confirmed",
  },
];

const MainSection = () => {
  return (
    <div className="flex flex-col text-gray-600 min-h-screen">
      <div className="flex space-x-4 my-5">
        <UserCircleIcon className="h-9 w-9" />
        <p className="text-2xl font-semibold">{patientDetails.name}</p>
      </div>

      <div className="flex bg-white rounded-lg w-4/5 p-3 space-x-6">
        <div className="p-7 rounded-full bg-gray-300" />
        <div>
          <p className="text-xl font-bold">Smith Adams</p>
          <p className="text-lg text-gray-400 font-semibold">
            smithadams02@gmail.com
          </p>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-x-8 gap-y-8 bg-white rounded-lg w-4/5 p-3 my-5">
        <div className="flex flex-col space-y-2">
          <p className="home-label">Date of Birth</p>
          <p className="home-value">{patientDetails.dob}</p>
        </div>
        <div className="flex flex-col space-y-2">
          <p className="home-label">Address</p>
          <p className="home-value">{patientDetails.address}</p>
        </div>
        <div className="flex flex-col space-y-2">
          <p className="home-label">Marital Status</p>
          <p className="home-value">{patientDetails.maritalStatus}</p>
        </div>
        <div className="flex flex-col space-y-2">
          <p className="home-label">Insurance</p>
          <p className="home-value">{patientDetails.insurance}</p>
        </div>
        <div className="flex flex-col space-y-2">
          <p className="home-label">Adhar No.</p>
          <p className="home-value">{patientDetails.adharNo}</p>
        </div>
        <div className="flex flex-col space-y-2">
          <p className="home-label">Phone Number</p>
          <p className="home-value">{patientDetails.phoneNo}</p>
        </div>
        <div className="flex flex-col space-y-2">
          <p className="home-label">Gender</p>
          <p className="home-value">{patientDetails.gender}</p>
        </div>
        <div className="flex flex-col space-y-2">
          <p className="home-label">Registered On</p>
          <p className="home-value">{patientDetails.registeredOn}</p>
        </div>
      </div>

      <div className="bg-white rounded-lg w-4/5 p-3 my-5">
        <button className="px-3 py-2 w-80 font-bold mx-auto text-xl rounded-full">
          Medical Records
        </button>

        <table className="text-gray-500 flex flex-col p-2 h-[20rem]">
          <thead>
            <tr className="flex bg-indigo-600 text-white m-3 p-3 rounded-xl justify-around space-x-4 text-center my-4">
              <th className="w-full flex flex-col space-y-3">Date</th>
              <th className="w-full flex flex-col space-y-3">Symptoms</th>
              <th className="w-full flex flex-col space-y-3">Test</th>
              <th className="w-full flex flex-col space-y-3">Results</th>
              <th className="w-full flex flex-col space-y-3">Status</th>
            </tr>
          </thead>
          <tbody className="flex-1 overflow-x-hidden overflow-y-scroll">
            {appoitnmentDetails.map((appointment) => (
              <tr className="flex items-center hover:bg-indigo-300 justify-around bg-indigo-100 m-3 p-3 rounded-xl text-gray-700 font-semibold">
                <td>{appointment.date}</td>
                <td>{appointment.symptoms}</td>
                <td>{appointment.category}</td>
                <td>{appointment.doctor}</td>
                <td>{appointment.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MainSection;
