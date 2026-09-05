
export type InspectionStatus =
  | "Scheduled"
  | "In Progress"
  | "Under Review"
  | "Complete";

  export type InspectionFilter = "All" | InspectionStatus;
export interface Inspection {
  id: number;
  siteId: number;
  inspectionDate: string;
  inspector: string;
  status: InspectionStatus;
}