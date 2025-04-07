import { Link, Outlet } from 'react-router';

const Layout = () => {
  return (
    <>
      <header className="bg-gray-800 text-white p-4 shadow-md">
        <nav className="flex justify-between items-center max-w-4xl mx-auto">
          <div className="text-lg font-bold">Ice's Blog</div>
          <div className="space-x-4">
            <Link to={'/'} className="hover:underline">
              Home
            </Link>
            <Link to={'/about'} className="hover:underline">
              About
            </Link>
          </div>
        </nav>
      </header>
      <main className="max-w-4xl mx-auto p-4">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
