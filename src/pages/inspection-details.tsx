import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { inspections } from "../data/inspections.data";
import { sites } from "../data/sites.data";
import FindingCard from "../components/finding-card/finding-card.component";
import FindingForm from "../components/finding-form/finding-form.component";
import type { Finding } from "../types/findings";
import { findings } from "../data/findings.data";


const InspectionDetails = () => {
    const { inspectionId } = useParams();

    const inspection = inspections.find((inspection) => inspection.id === Number(inspectionId));

    const matchingSite = sites.find(
        (site) => site.id === Number(inspectionId)
    );

    const [inspectionFindings, setInspectionFindings] = useState<Finding[]>(findings.filter(
        (finding) => finding.inspectionId === Number(inspectionId)) 
    );

    const handleAddFinding = (title:string, description:string, severity:Finding["severity"]) => {
        const newFinding: Finding = {
            id: Date.now(),
            inspectionId: inspection?.id,
            title,
            description,
            severity
        };
          setInspectionFindings((currentFindings) => [...currentFindings, newFinding,]);
    }

    if (!inspection) {
        return (
            <main>
                <h2>Inspection Not Found</h2>
                <p>The requested inspection could not be found.</p>
            </main>
        );
    }
    return (
        <main>
            <h2>Inspection Details</h2>

            <h3>{matchingSite?.name}</h3>
            <p>{matchingSite?.location}</p>

            <p>Inspection ID: {inspection.id}</p>
            <p>Date: {inspection.inspectionDate}</p>
            <p>Inspector: {inspection.inspector}</p>
            <p>Status: {inspection.status}</p>

            <section>
                <h3>Findings</h3>
                {inspectionFindings.length === 0 ? (
                    <p>No findings have been recorded.</p>
                ): (
                    inspectionFindings.map((finding) => (
                        <FindingCard
                            key={finding.id}
                            finding={finding}
                        />
                    ))
                )
             }
             <h3>Add Finding</h3>

             <FindingForm onAddFinding={handleAddFinding} />
            </section>

            <Link to="/inspections">
                 ← Back to Inspections
            </Link>
        </main>
    );
}

export default InspectionDetails;
