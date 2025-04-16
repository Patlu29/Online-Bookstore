import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please fill in both email and password.");
      return;
    }

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    console.log(error);

    try {
      console.log("hii");
      const loginResponse = await axios.post(
        "http://localhost:3900/user/login",
        { email: email, password: password }
      );

      const token = loginResponse.data;
      console.log(token);

      localStorage.setItem("token", token.token);
      navigate("/");
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "An error occurred during login."
      );
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Login</h2>

      <form
        onSubmit={handleSubmit}
        className="mx-auto"
        style={{ maxWidth: "400px" }}
      >
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Login
        </button>
      </form>

      <p className="text-center mt-3">
        Don't have an account?
        <Link to="/register" className="text-decoration-none">
          Register
        </Link>
      </p>
    </div>
  );
};

export default Login;
