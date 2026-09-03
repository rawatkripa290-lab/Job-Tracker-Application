import ApplicationCard from "./ApplicationCard";
import {useDraggable,useDroppable,DndContext, closestCenter} from '@dnd-kit/core';
  function DroppableColumn({status , children }){
    const {setNodeRef , isOver} = useDroppable({id:status});
    return(
      <div ref={setNodeRef}
      className={`flex-1 rounded-lg p-3 min-h-[300px] transition-colors ${isOver ? "bg-blue-100" : "bg-gray-100"}`}>
        <h3 className="font-bold text-center mb-3 bg-gray-300 rounded p-2">{status}</h3>
        {children}
      </div>
    );
  }
  function DraggableCard ({job}){
    const {attributes,listeners,setNodeRef , transform,isDragging} = useDraggable({id: job.id});
    const style ={
      transform : transform ? `translate(${transform.x}px , ${transform.y}px)` : undefined , 
      opacity : isDragging ? 0.5 : 1,
      cursor :"grab"
    }
    return(
      <div ref={setNodeRef} style={style}{...listeners}{...attributes}>
        <ApplicationCard job={job}/>
      </div>
    );
  }
  function KanbanBoard({applications,updateStatus}){
  const statuses = ["Applied","OA","Interview","Offer","Rejected"];
  const handleDragEnd = (event) => {
    const {active,over} = event ; 
    if(!over) return;
    const jobId = active.id;
    const newStatus = over.id;
    updateStatus(jobId,newStatus);
  }


  return (
    <>
    <DndContext collisionDetection ={closestCenter} onDragEnd ={handleDragEnd}>
    <div className="flex gap-4">
      {statuses.map((status) => {
        const jobsinthisstatus = applications.filter((job) => job.status === status);
        return(
          <DroppableColumn key={status} status={status}>
            {jobsinthisstatus.map((job) => (
              <DraggableCard key={job.id} job={job}/>
            ))}
          </DroppableColumn>
        );
      })}
    </div>
    </DndContext>
    </>
  );
}

export default KanbanBoard;