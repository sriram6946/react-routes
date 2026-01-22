import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="text-center py-4 border-b font-semibold text-lg">
        Lomaa It Solutions
      </header>

      <main className="flex-1 p-6">
        <Outlet />
      </main>

      <footer className="text-center py-4 border-t">Lomaa@2026</footer>
    </div>
  );
};

export default AppLayout;
