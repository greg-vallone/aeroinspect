
interface StatCardProps {
    title: string;
    value: number;
}

const StatCard = ( {title, value }: StatCardProps) => {
    return (
        <div className="stat-card">
            <h3>{title}</h3>
            <p>{value}</p>
        </div>
    );
}

export default StatCard;