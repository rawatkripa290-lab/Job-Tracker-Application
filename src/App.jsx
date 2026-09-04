import './App.css'
import Analytics from './components/Analytics';
import ApplicationForm from './components/ApplicationForm'
import ApplicationList from './components/ApplicationList'
import KanbanBoard from './components/KanbanBoard';
import SearchFilter from './components/SearchFilter'
import { useState, useEffect } from 'react';

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [applications, setapplications] = useState(() => {
    const saved = localStorage.getItem("applications");
    return saved ? JSON.parse(saved) : [];
  });

  const addApplication = (newJob) => {
    setapplications([...applications, newJob])
  }
  const[viewmode , setviewmode]= useState("list");
  const updateStatus = (id , newStatus) => {
    setapplications(applications.map((job) =>
      job.id === id ? {...job,status:newStatus } : job
    ));
  }
  useEffect(() => {
    localStorage.setItem("applications", JSON.stringify(applications));
  }, [applications]);

  const filteredApplications = applications.filter((job) => {
    const matchesSearch = job.companyname.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "All" || job.status === statusFilter;
    return matchesSearch && matchesStatus;
  })
  const updateNotes =(id,newNotes)=>{
    setapplications(applications.map((job)=>
    job.id === id ? {...job , notes: newNotes}: job));
  }
  return (
    <>
      <div className='bg-slate-50'>
      <h1 className="p-3 text-3xl font-bold text-center text-blue-500">Job Trail</h1>
      <p className="text-1xl font-medium text-center text-gray-500 pt-[0.99px]">Job HuntHQ</p>
      <div>
        <ApplicationForm addApplication={addApplication}/>
        <Analytics applications={applications}/>
        <SearchFilter 
          searchTerm={searchTerm} 
          setSearchTerm={setSearchTerm} 
          statusFilter={statusFilter} 
          setStatusFilter={setStatusFilter} 
        />
        <div className='flex justify-center gap-4 mb-4'>
          <button className = "p-2 bg-blue-500 rounded-lg text-white" onClick = {() => setviewmode("list")}>List View</button>
        <button className = "p-2 bg-blue-500 rounded-lg text-white" onClick={()=> setviewmode("kanban")}>Kanban View</button>
        </div>
        {viewmode === "list" ? (<ApplicationList applications={filteredApplications} updateNotes={updateNotes}/>):
        (<KanbanBoard applications={filteredApplications} updateStatus={updateStatus}/>)}
      </div>
      </div>
    </>
  )
}
export default App