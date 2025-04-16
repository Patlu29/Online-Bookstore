import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const AuthorRegister = () => {
  const [authorName, setAuthorName] = useState("");
  const [email, setEmail] = useState("");
  // const [genre, setGenre] = useState("");
  const [password, setPassword] = useState("");
  // const [bio, setBio] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
e.preventDefault()
    if (!authorName || !email || !password) {
      setError("Name, email and password are required.");
      return;
    }

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    try {
      await axios.post("http://localhost:3900/author/register", {
        authorName,
        email,
        // genre,
        password,
        // bio
      });

      setSuccess("Author registered successfully!");
      setError("");
      setTimeout(() => {
        navigate("/publishbook");
        alert("Author successfully registered");
      }, 1000);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred.");
      setSuccess("");
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Author Registration</h2>

      <form onSubmit={handleSubmit} className="mx-auto" style={{ maxWidth: "500px" }}>
        {error && <div className="alert alert-danger">{error}</div>}
        {success && <div className="alert alert-success">{success}</div>}

        <div className="mb-3">
          <label className="form-label">Author Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter full name"
            value={authorName}
            onChange={(e) => setAuthorName(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        {/* <div className="mb-3">
          <label className="form-label">Genre (optional)</label>
          <input
            type="text"
            className="form-control"
            placeholder="e.g., Fiction, History"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
          />
        </div> */}

        {/* <div className="mb-3">
          <label className="form-label">Short Bio (optional)</label>
          <textarea
            className="form-control"
            placeholder="Tell us a little about yourself..."
            rows={3}
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          ></textarea>
        </div> */}

        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Create a password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="btn btn-success w-100">Register as Author</button>
      </form>

      <p className="text-center mt-3">
        Already registered as an author?{" "}
        <Link to="/authorLogin" className="text-decoration-none">Login here</Link>
      </p>
    </div>
  );
};

export default AuthorRegister;
