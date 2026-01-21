const Login = () => {
  return (
    <div className="login-card">
      <h2>Login / Sign-up</h2>

      <input type="email" placeholder="Email" required />
      <input type="password" placeholder="Password" required />

      <div className="button-row">
        <a href="/app/home" className="blue-btn">
          Login
        </a>
        <button type="button" className="green-btn">
          Sign up
        </button>
      </div>
    </div>
  );
};

export default Login;
