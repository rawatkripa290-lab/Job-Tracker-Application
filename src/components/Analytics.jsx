import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
const COLORS={
  Applied : '#3b82f6',
  OA:'#eab308',
  Interview: "#22c55e",
  Offer: "#a855f7",
  Rejected: "#ef4444"
}
function Analytics({applications}){
  const statuses = ["Applied","OA","Interview","Offer","Rejected"];
  const chartdata = statuses.map((status)=>({
    name: status ,
    value : applications.filter((job) => job.status === status).length
  })).filter((item) => item.value > 0);
  const totalapplications = applications.length;
  const respondedapplications = applications.filter((job)=> job.status != "Applied").length;
  const responserate = totalapplications>0 ? ((respondedapplications/totalapplications)*100).toFixed(1) : 0;
  return(
    <>
    <div className="pd-5 bg-slate-300 rounded-lg shadow-md">
      <h2 className ="text-xl font-bold text-center mb-4">Analytics Dashboard</h2>
      <div className="flex justify-center gap-8 mb-6">
        <div className="text-center">
          <p className="font-bold text-2xl bg-blue-500 rounded-lg text-white">{totalapplications}</p>
          <p className="font-medium pt-2">Total Applications</p>
        </div>
        <div className="text-center">
          <p className="font-bold text-2xl bg-green-500 rounded-lg text-white w-33">{responserate}</p>
          <p className="font-medium pt-2">Response Rate</p>
        </div>
      </div>
      {chartdata.length > 0 ? (
        <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie 
          data={chartdata}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={100}
          label
          >
            {chartdata.map((entry) => (
              <Cell key={entry.name} fill={COLORS[entry.name]}/>
            ))}
            </Pie>
            <Tooltip/>
            <Legend/>
        </PieChart>
        </ResponsiveContainer>
      ):(
        <p className="text-center text-gray-500">No Data yet add some more applications</p>
      )}
    </div>
    </>
  );
}
export default Analytics;