import type { Inspection } from "../types/inspection";
import type { Site } from "../types/site";
import { sites } from "../data/sites.data";

export function getSiteForInspection(
    inspection: Inspection
): Site | undefined {
    return sites.find(
        (site) => site.id === inspection.siteId
    );
}