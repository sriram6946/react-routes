import { NavLink, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <nav className="flex justify-between items-center px-8 py-4 border-b">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "font-bold text-blue-600" : "text-black"
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/login"
          className={({ isActive }) =>
            isActive ? "font-bold text-blue-600" : "text-black"
          }
        >
          Login / Sign-up
        </NavLink>
      </nav>
      <main className="flex-1 p-6">
        <Outlet />
      </main>
      <footer className="text-center py-4 border-t">
        Footer
      </footer>

    </div>
  );
};

export default Layout;



