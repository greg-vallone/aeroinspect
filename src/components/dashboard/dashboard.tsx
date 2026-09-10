import StatCard from "../stat-card/stat-card.component";
import InspectionList from "../inspection-list/inspection-list.component";
import { sites } from "@/data/sites.data";

const Dashboard = () => {
    return (
        <main>
            <h2>Dashboard</h2>

            <section>
                <StatCard title="Total Sites" value={sites.length} />
                <StatCard title="Total Assets" value={86} />
                <StatCard title="Pending Inspections" value={7} />
                <StatCard title="Open Findings" value={14} />
            </section>
            <div>
                <h2>Recent Inspections</h2>
                <InspectionList/>
            </div>
            
        </main>
    );
}

export default Dashboard;