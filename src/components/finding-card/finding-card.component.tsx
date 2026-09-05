import type { Finding } from "../../types/findings";

interface FindingCardProps {
    finding: Finding;
}

const FindingCard = ({ finding }:FindingCardProps) => {
    return (
        <article className="finding-card">
            <h4>{finding.title}</h4>
            <p>{finding.description}</p>
            <p><strong>Severity:</strong>{finding.severity}</p>
        </article>
    );
}

export default FindingCard;