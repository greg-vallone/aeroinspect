
export type InspectionStatus =
  | "Scheduled"
  | "In Progress"
  | "Under Review"
  | "Complete";

export interface Inspection {
  id: number;
  siteName: string;
  inspectionDate: string;
  inspector: string;
  status: InspectionStatus;
}