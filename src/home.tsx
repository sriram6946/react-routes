const Home = () => {
  return (
    <div className="flex justify-center items-center h-full overflow-hidden">
      <form className="w-80 border p-6 rounded-lg shadow-md">

        <h2 className="text-xl font-semibold text-center mb-4">
          Login / Sign-up
        </h2>

        <input
          id="email"
          type="email"
          placeholder="Email"
          className="w-full border px-3 py-2 mb-3 rounded"
        />

        <input
          id="password"
          type="password"
          placeholder="Password"
          className="w-full border px-3 py-2 mb-3 rounded"
        />

        <div className="flex justify-between">
          <button
            type="button"
            className="bg-blue-600 text-white px-4 py-2 rounded"
            onClick={() => {
              const email = (document.getElementById("email") as HTMLInputElement).value;
              const password = (document.getElementById("password") as HTMLInputElement).value;

              if (email === "admin@gmail.com" && password === "Admin123") {
                window.location.href = "/app/home";
              } else {
                alert("Invalid email or password");
              }
            }}
          >
            Login
          </button>

         <button
              type="button"
              className="bg-green-600 text-white px-4 py-2 rounded"
              onClick={() => {
              window.location.href = "/register";
           }}
          >
         Sign up
        </button>

        </div>

      </form>
    </div>
  );
};

export default Home;
