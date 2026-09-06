
import { Link, useParams } from "react-router-dom";
import { inspections } from "../data/inspections.data";

import InspectionFindings from "../components/inspection-findings/inspection-findings.component";
import { findings } from "../data/findings.data";
import { getSiteForInspection } from "../utils/siteUtils";


const InspectionDetails = () => {
    const { inspectionId } = useParams<{inspectionId:string}>();
    const id = Number(inspectionId);

    const inspection = inspections.find((inspection) => inspection.id === id);

    if (!inspection) {
    return (
        <main>
            <h2>Inspection Not Found</h2>
            <p>The requested inspection could not be found.</p>
                    <Link to="/inspections">
          ← Back to Inspections
        </Link>
        </main>
    );
    }

    const matchingSite = getSiteForInspection(inspection);

      const inspectionFindings = findings.filter(
    (finding) => finding.inspectionId === inspection.id
  );

    return (
        <main>
            <h2>Inspection Details</h2>

            <h3>{matchingSite?.name}</h3>
            <p>{matchingSite?.location}</p>

            <p>Inspection ID: {inspection.id}</p>
            <p>Date: {inspection.inspectionDate}</p>
            <p>Inspector: {inspection.inspector}</p>
            <p>Status: {inspection.status}</p>

            <InspectionFindings
                inspectionId={inspection.id}
                initialFindings={inspectionFindings}
            />

            <Link to="/inspections">
                 ← Back to Inspections
            </Link>
        </main>
    );
}

export default InspectionDetails;
