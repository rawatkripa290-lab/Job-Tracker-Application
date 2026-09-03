import ApplicationCard from './ApplicationCard';
function ApplicationList({applications,updateNotes}){
  return(
    <div>
      {applications.map((job)=>(<ApplicationCard job={job} key={job.id} updateNotes={updateNotes}/>))}
    </div>
  );
}
export default ApplicationList;