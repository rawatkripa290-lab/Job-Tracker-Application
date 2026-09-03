import { useState } from "react";
function ApplicationForm({ addApplication }) {
  const [job, setjob] = useState({
    companyname: "",
    jobtitle: "",
    status: "",
    dateapplied: "",
    joblink: "",
  });
  const handlechange = (e) => {
    setjob({
      ...job,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!job.companyname || !job.jobtitle) {
      alert("Please fill the company name and job title first");
      return;
    }
    const final = Date.now();
    const newJob = {
      id: final,
      companyname: job.companyname,
      jobtitle: job.jobtitle,
      status: job.status,
      dateapplied: job.dateapplied,
      joblink: job.joblink,
    };
    addApplication(newJob);
    setjob({
      companyname: "",
      jobtitle: "",
      status: "",
      dateapplied: "",
      joblink: "",
    });
  };
  // const[companyname , setcompanyname] = useState("");
  // const[jobtitle ,setjobtitle]=useState("");
  // const[status,setstatus]=useState("");
  // const[dateapplied,setdateapplied]=useState("");
  // const[joblink,setjoblink]=useState("");
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="p-10  border-gray-300  flex flex-col items-center justify-center rounded-lg ">
          <h1 className="text-2xl font-medium text-center bg-gray-300 rounded-lg w-full h-10">
            Application Form
          </h1>
          <br />
          <label className="text-base font-medium text-black pb-2 ">
            Company Name :{" "}
          </label>
          <input
            name="companyname"
            className="pb-2 border border-gray-300 rounded text-center"
            type="text"
            placeholder="Enter Company Name"
            value={job.companyname}
            onChange={handlechange}
          ></input>
          <br />
          <label className="text-base font-medium text-black pb-2 ">
            Job Title :
          </label>
          <input
            name="jobtitle"
            className="pb-2 border border-gray-300 rounded text-center"
            type="text"
            placeholder="Enter Job Title"
            value={job.jobtitle}
            onChange={handlechange}
          ></input>
          <br />
          <label className="text-base font-medium text-black pb-2 ">
            Status
          </label>
          <select
            name="status"
            className="pb-2 border border-gray-300 rounded text-center"
            value={job.status}
            onChange={handlechange}
          >
            <option value="">Select Status</option>
            <option value="Applied">Applied</option>
            <option value="OA">OA</option>
            <option value="Interview">Interview</option>
            <option value="Offer">Offer</option>
            <option value="Rejected">Rejected</option>
          </select>
          <br />
          <label className="text-base font-medium text-black pb-2 ">
            Date Applied :
          </label>
          <input
            name="dateapplied"
            className="pb-2 border border-gray-300 rounded text-center"
            type="date"
            value={job.dateapplied}
            onChange={handlechange}
          ></input>
          <br />
          <label className="text-base font-medium text-black pb-2 ">
            Job Link:
          </label>
          <input
            name="joblink"
            className="pb-2 border border-gray-300 rounded text-center"
            type="text"
            placeholder="Job Link Here"
            value={job.joblink}
            onChange={handlechange}
          ></input>
          <br />
          <button
            className="bg-blue-500 p-2 text-white rounded hover:bg-blue-600 "
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
}
export default ApplicationForm;
