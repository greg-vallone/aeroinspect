
import Link from "next/link";
import { inspections } from "@/data/inspections.data";
import InspectionFindings from "../inspection-findings/inspection-findings.component";
import { findings } from "@/data/findings.data";
import { getSiteForInspection } from "@/utils/siteUtils";

interface InspectionDetailsProps {
    inspectionId: string;
}

const InspectionDetails = ({
    inspectionId,
    }: InspectionDetailsProps) => {
  
    const id = Number(inspectionId);

    const inspection = inspections.find((inspection) => inspection.id === id);

    if (!inspection) {
    return (
        <main>
            <h2>Inspection Not Found</h2>
            <p>The requested inspection could not be found.</p>
                    <Link href="/inspections">
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

            <Link href="/inspections">
                 ← Back to Inspections
            </Link>
        </main>
    );
}

export default InspectionDetails;
