
export type FindingSeverity = 
|"Low"
|"Medium"
|"High"
|"Critical";

export interface Finding {
    id: number;
    inspectionId: number;
    title: string;
    description: string;
    severity: FindingSeverity;
}