import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const AuthorLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
e.preventDefault()
    if (!email || !password) {
      setError("Please fill in both email and password.");
      return;
    }

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    try {
      const loginResponse = await axios.post(
        "http://localhost:3900/author/login",
        { email, password },
        { headers: { "Content-Type": "application/json" } }
      );

      const token = loginResponse.data;
      console.log(token, "login tokeen");


      localStorage.setItem("token", token.token);
      navigate("/publishbook");
    } catch (err) {
      setError(
        err instanceof Error
          ? "author not found"
          : "An error occurred during author login."
      );
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Author Login</h2>

      <form onSubmit={handleSubmit} className="mx-auto" style={{ maxWidth: "400px" }}>
        {error && <div className="alert alert-danger">{error}</div>}

        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
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
          <label htmlFor="password" className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="btn btn-success w-100">Login as Author</button>
      </form>

      <p className="text-center mt-3">
        Not registered yet?{" "}
        <Link to="/authorRegister" className="text-decoration-none">Register as Author</Link>
      </p>
    </div>
  );
};

export default AuthorLogin;
