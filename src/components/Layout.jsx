import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from '../components/Footer';

const Layout = () => {
  return (
    <div className="flex flex-col ">
      <Navbar />
      <main className="flex-grow w-full px-4 sm:px-6 lg:px-0 mx-auto max-w-7xl">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;