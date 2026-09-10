import InspectionDetails from "@/components/inspections/inspection-details";

interface InspectionDetailsPageProps {
    params: Promise<{
        inspectionId: string;
    }>;
}

export default async function InspectionDetailsPage({
    params,
}: InspectionDetailsPageProps) {
    const { inspectionId } = await params;

    return (
        <InspectionDetails inspectionId={inspectionId} />
    )
}