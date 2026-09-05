import { Link } from "react-router-dom";

const Sidebar = () => {
    return (
        <aside>
            <nav>
                <ul>
                    <li><Link to='/'>Dashboard</Link></li>
                    <li><Link to='/sites'>Sites</Link></li>
                    <li><Link to='/inspections'>Inspections</Link></li>
                    <li><Link to='/findings'>Findings</Link></li>
                    <li><Link to='/reports'>Reports</Link></li>
                </ul>
            </nav>
        </aside>
    );
}

export default Sidebar;