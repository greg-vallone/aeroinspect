import { inspections } from "../../data/inspections.data";

const InspectionList = () => {
    return (
        <div>
            <h2>Recent Inspections</h2>
            {inspections.map((inspection) =>(
                <div key={inspection.id}>
                    <h3>{inspection.siteName}</h3>
                    <p>Date: {inspection.inspectionDate}</p>
                    <p>Inspector: {inspection.inspector}</p>
                    <p>Status: {inspection.status}</p>
                </div>
            ))}
        </div>
    )
}

export default InspectionList;