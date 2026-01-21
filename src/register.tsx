import { NavLink } from "react-router-dom";

const Register = () => {
  return (
    <div className="flex justify-center mt-16">
      <div className="w-80 border p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-center mb-4">
          Register Page
        </h2>

        <input
          type="text"
          placeholder="Full Name"
          className="w-full border px-3 py-2 mb-3 rounded"
        />

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
        <button className="w-full bg-green-600 text-white py-2 rounded mb-3">
          Create Account
        </button>
        <NavLink to="/">
          <button className="w-full border border-blue-600 text-blue-600 py-2 rounded hover:bg-blue-50">
            Login
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default Register;
