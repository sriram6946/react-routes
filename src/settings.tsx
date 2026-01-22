import { Link } from "react-router-dom";

const Settings = () => {
  return (
    <div className="flex flex-col items-center gap-4 mt-10">
      <h1 className="text-xl font-semibold">Settings</h1>

      <div className="flex flex-col gap-4">
  <Link to="/app/home">
    <button className="w-40 px-6 py-3 bg-blue-600 text-white rounded">
      Home
    </button>
  </Link>

  <Link to="/">
    <button className="w-40 px-6 py-3 bg-blue-600 text-white rounded">
      Logout
    </button>
  </Link>
</div>

    </div>
  );
};

export default Settings;

