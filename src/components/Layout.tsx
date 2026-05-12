import { Outlet } from 'react-router-dom';
import BackgroundEffects from './BackgroundEffects';
import Header from './Header';
import Footer from './Footer';

export default function Layout() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <BackgroundEffects />
      <Header />
      <main className="relative">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
