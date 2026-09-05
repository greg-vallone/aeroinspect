import SiteCard from "../components/site-card/site-card.component";
import { sites } from "../data/sites.data";

const Sites = () => {
    return (
        <main>
            <h2>Sites</h2>

            <section className="site-grid">
                {sites.map((site) => (
                    <SiteCard key={site.id} site={site} />
                ))}
            </section>
        </main>
    );
}

export default Sites;