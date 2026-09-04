import StatCard from "../../components/stat-card/stat-card.component";
import InspectionList from "../../components/inspection-list/inspection-list.component";

const Dashboard = () => {
    return (
        <main>
            <h2>Dashboard</h2>

            <section>
                <StatCard title="Total Sites" value={12} />
                <StatCard title="Total Assets" value={86} />
                <StatCard title="Pending Inspections" value={7} />
                <StatCard title="Open Findings" value={14} />
            </section>

            <InspectionList/>
        </main>
    );
}

export default Dashboard;