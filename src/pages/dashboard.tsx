import StatCard from "../components/stat-card/stat-card.component";
import InspectionList from "../components/inspection-list/inspection-list.component";
import { sites } from "../data/sites.data";

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

            <InspectionList/>
        </main>
    );
}

export default Dashboard;