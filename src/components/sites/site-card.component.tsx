import type { Site } from "../../types/site";

interface SiteCardProps {
    site: Site;
}

const SiteCard = ({site}:SiteCardProps) => {
    return (
        <article className="site-card">
            <h3>{site.name}</h3>

            <p>{site.location}</p>

            <p>
                <strong>Assets:</strong> {site.assetCount}
            </p>

            <p>
                <strong>Last Inspection:</strong> {site.lastInspectionDate}
            </p>
        </article>
    );
}

export default SiteCard;