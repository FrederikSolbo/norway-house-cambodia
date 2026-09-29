import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Page from './pages/Page';
import NotFound from './pages/NotFound';
import { siteMap, flatten } from './siteMap';

const subPages = flatten(siteMap).filter((p) => p.slug !== '');

export default function App() {
  return (
    <>
      <Header />
      <main className="wrap content">
        <Routes>
          <Route path="/" element={<Home />} />
          {subPages.map((p) => (
            <Route key={p.slug} path={`/${p.slug}`} element={<Page item={p} />} />
          ))}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
