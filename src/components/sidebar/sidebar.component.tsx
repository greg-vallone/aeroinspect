import Link from "next/link";

const Sidebar = () => {
    return (
        <aside>
            <nav>
                <ul>
                    <li><Link href='/'>Dashboard</Link></li>
                    <li><Link href='/sites'>Sites</Link></li>
                    <li><Link href='/inspections'>Inspections</Link></li>
                    <li><Link href='/findings'>Findings</Link></li>
                    <li><Link href='/reports'>Reports</Link></li>
                </ul>
            </nav>
        </aside>
    );
}

export default Sidebar;