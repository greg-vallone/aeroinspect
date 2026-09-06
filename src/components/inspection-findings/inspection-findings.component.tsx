import { useState } from "react";
import FindingCard from "../finding-card/finding-card.component";
import FindingForm from "../finding-form/finding-form.component";
import type { Finding } from "../../types/findings";

interface InspectionFindingProps{
    inspectionId: number;
    initialFindings: Finding[];
};

const InspectionFindings = ({
  inspectionId,
  initialFindings,
}: InspectionFindingProps) => {
  const [inspectionFindings, setInspectionFindings] = useState<Finding[]>(initialFindings);

  const handleAddFinding = (
    title: string,
    description: string,
    severity: Finding["severity"]
  ) => {
    const newFinding: Finding = {
        id: Date.now(),
        inspectionId,
        title,
        description,
        severity,
    };

    setInspectionFindings((currentFindings) => [
        ...currentFindings,
        newFinding,
    ]);
  }
  return (
    <section>
      <h3>Findings</h3>

      {inspectionFindings.length === 0 ? (
        <p>No findings have been recorded.</p>
      ) : (
        inspectionFindings.map((finding) => (
          <FindingCard
            key={finding.id}
            finding={finding}
          />
        ))
      )}

      <h3>Add Finding</h3>

      <FindingForm onAddFinding={handleAddFinding} />
    </section>
  );
};

export default InspectionFindings;

