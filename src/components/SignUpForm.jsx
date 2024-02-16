import { useState } from "react";

function SignUpForm({ setToken }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const API_URL = "https://fsa-jwt-practice.herokuapp.com/signup";
      const response = await fetch(API_URL);
      const parsedResponse = await response.json();
      console.log(parsedResponse);
    } catch (error) {
      setError(error.message);
    }
    setToken(result.token);
  }

  return (
    <>
      <h2>Sign Up</h2> {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button>Submit</button>
      </form>
    </>
  );
}

export default SignUpForm;
