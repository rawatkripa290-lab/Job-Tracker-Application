function SearchFilter({ searchTerm, setSearchTerm, statusFilter, setStatusFilter }) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 p-5">
      <input
        type="text"
        placeholder="Search by company name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border border-gray-300 rounded p-2 w-64 text-center"
      />
      <select
        value={statusFilter}
        onChange={(e) => setStatusFilter(e.target.value)}
        className="border border-gray-300 rounded p-2 w-64 text-center"
      >
        <option value="All">All</option>
        <option value="Applied">Applied</option>
        <option value="OA">OA</option>
        <option value="Interview">Interview</option>
        <option value="Offer">Offer</option>
        <option value="Rejected">Rejected</option>
      </select>
    </div>
  );
}
export default SearchFilter;