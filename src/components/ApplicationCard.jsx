import { useState } from "react";
function ApplicationCard({ job, updateNotes }) {
  const getStatusColor = (status) => {
    switch (status) {
      case "Applied":
        return "bg-blue-100 text-blue-700";
      case "OA":
        return "bg-yellow-100 text-yellow-700";
      case "Interview":
        return "bg-green-100 text-green-700";
      case "Offer":
        return "bg-purple-100 text-purple-700";
      case "Rejected":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };
  const [isEditing, setIsEditing] = useState(false);
  const [noteText, setNoteText] = useState(job.notes || "");
  const handlesavenote = () => {
    updateNotes(job.id, noteText);
    setIsEditing(false);
  };
  return (
    <div>
      <h1 className="text-2xl font-medium text-center bg-gray-300 rounded-lg w-full h-10 ">
        Submitted Entries
      </h1>
      <div
        className="p-5 border-gray-500 flex
    flex-col items-center justify-center
    rounded-lg "
      >
        <div>
          <p className="text-md text-gray-800 font-medium">
            Company Name :{" "}
            <span className="font-bold p-2 text-black">{job.companyname} </span>
          </p>
          <p className="text-md text-gray-800 font-medium">
            Job Title :{" "}
            <span className="font-bold p-2 text-black">{job.jobtitle} </span>
          </p>
          <p className="text-md text-gray-800 font-medium">
            Status :{" "}
            <span
              className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(job.status)}`}
            >
              {job.status}{" "}
            </span>
          </p>
          <p className="text-md text-gray-800 font-medium">
            Date Applied :{" "}
            <span className="font-bold p-2 text-black">{job.dateapplied} </span>
          </p>
          <p className="text-md text-gray-800 font-medium">
            Job Link :{" "}
            <span className="font-bold p-2 text-black">{job.joblink} </span>
          </p>
        </div>
      </div>
      <div>
        {isEditing ? (
          <>
            <textarea
              value={noteText}
              onChange={(e) => setNoteText(e.target.value)}
              className="border border-gray-300 rounded p-2 w-full"
            />
            <div className="flex justify-center mt-4">
              <button
                className="bg-green-500 text-white px-3 py-1 rounded"
                onClick={handlesavenote}
              >
                Save
              </button>
            </div>
          </>
        ) : (
          <>
            <div className ="bg-gray-100 rounded-lg p-4">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-semibold text-gray-800 text-2xl"> 📝 Note </h3>
                <button className="text-blue-500 hover:text-blue-700 text-sm" onClick={() => setIsEditing(true)}>
                  {job.notes ? "Edit Note" : "Add Note"}
                </button>
              </div>
              <p className="text-gray-700 text-sm">{job.notes || "No Notes Yet"}</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
export default ApplicationCard;