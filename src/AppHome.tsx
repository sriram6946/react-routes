import { Link } from "react-router-dom";

const AppHome = () => {
  return (
    <div className="flex flex-col items-center gap-6 mt-10">
      <strong><h1>Home</h1></strong>
      {/* <Link
        to="/"
        className="text-blue-600 font-medium hover:underline"
      >
        Home
      </Link> */}
      <Link to="/app/settings">
        <button className="px-6 py-3 bg-green-600 text-white rounded">
          Settings
        </button>
      </Link>

    </div>
  );
};

export default AppHome;


