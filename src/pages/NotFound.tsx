import { Link } from 'react-router-dom';
import { usePageTitle } from '../usePageTitle';

export default function NotFound() {
  usePageTitle('Fant ikke siden');
  return (
    <section className="block">
      <h2>Fant ikke siden</h2>
      <p>
        Denne siden finnes ikke. <Link to="/">Gå til forsiden</Link>.
      </p>
    </section>
  );
}
