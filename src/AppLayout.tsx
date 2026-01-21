import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">

   
      <header className="text-center py-4 border-b font-semibold text-lg">
        App
      </header>

      <main className="flex-1 p-6">
        <Outlet />
      </main>


      <footer className="text-center py-4 border-t">
        Footer2
      </footer>

    </div>
  );
};

export default AppLayout;
