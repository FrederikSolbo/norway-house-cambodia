import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import NavList from './Nav';
import { siteMap } from '../siteMap';
import { logo } from '../content';

function useScrolledPast(px: number) {
  const [past, setPast] = useState(false);
  useEffect(() => {
    const onScroll = () => setPast(window.scrollY > px);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [px]);
  return past;
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [logoFailed, setLogoFailed] = useState(false);
  const location = useLocation();
  const compact = useScrolledPast(220);

  useEffect(() => setMenuOpen(false), [location.pathname]);

  return (
    <>
      <header className="header">
        <Link to="/" className="logo">
          {logoFailed ? (
            <span className="logo-text">{logo.alt}</span>
          ) : (
            <img src={logo.src} alt={logo.alt} onError={() => setLogoFailed(true)} />
          )}
        </Link>
        <button
          className="menu-toggle"
          aria-label="Meny"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span />
          <span />
          <span />
        </button>
        <nav className={`main-nav${menuOpen ? ' open' : ''}`} aria-label="Hovedmeny">
          <NavList items={siteMap} />
        </nav>
      </header>

      {/* Slim bar that slides in once the big header scrolls away, like the original theme */}
      <div className={`sticky-bar${compact ? ' show' : ''}`} aria-hidden={!compact}>
        <nav>
          <NavList items={siteMap} />
        </nav>
      </div>
    </>
  );
}
