"use client"
import { useState } from "react";
import { inspections } from "../../data/inspections.data";
import type { InspectionFilter } from "../../types/inspection";
import Link  from "next/link"
import { getSiteForInspection } from "../../utils/siteUtils";

const InspectionList = () => {
    const [selectedStatus, setSelectedStatus] = useState<InspectionFilter>('All')

    const filteredInspections =
        selectedStatus === "All"
          ? inspections
          : inspections.filter((inspection) => inspection.status === selectedStatus);

    return (
        <div>
            <div className="inspection-filter">
                <label htmlFor="status-filter">Filter by Status:</label>

                <select
                name="status-filter"
                id="status-filter"
                value={selectedStatus}
                onChange={(event) => setSelectedStatus(event.target.value as InspectionFilter)}
                >
                <option value="All">All</option>
                <option value="Scheduled">Scheduled</option>
                <option value="In Progress">In Progress</option>
                <option value="Under Review">Under Review</option>
                <option value="Complete">Complete</option>
                </select>
            </div>

            {filteredInspections.length === 0 && (<p>No inspections match the selected status.</p>)}
            {filteredInspections.length !== 0 && (<p>Showing {filteredInspections.length} inspections</p>)}
            
            {filteredInspections.map((inspection) =>{
                const matchingSite = getSiteForInspection(inspection);
                return (
                      <div className="inspection-item" key={inspection.id}>
                        <h3>
                            <Link href={`/inspections/${inspection.id}`}>{matchingSite?.name}</Link>
                        </h3>
                        <p>Date: {inspection.inspectionDate}</p>
                        <p>Inspector: {inspection.inspector}</p>
                        <p>Status: {inspection.status}</p>
                      </div>
                )  
            })}
        </div>
    )
}

export default InspectionList;