import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex justify-center mt-16">
      <form className="w-80 border p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-center mb-4">
          Login / Sign-up
        </h2>
        <input
          type="email"
          placeholder="Email"
          className="w-full border px-3 py-2 mb-3 rounded"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full border px-3 py-2 mb-4 rounded"
        />
        <div className="flex justify-between">
          <Link to="/app/home">
            <button
              type="button"
              className="bg-blue-600 text-white px-4 py-2 rounded"
            >
              Login
            </button>
          </Link>
          <Link to="/register">
            <button
              type="button"
              className="bg-green-600 text-white px-4 py-2 rounded"
            >
              Sign up
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Home;
