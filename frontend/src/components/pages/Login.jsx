import { useState, useEffect } from "react";
import { FaSignInAlt } from "react-icons/fa";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const changeHandler = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <main className="container">
      <section className="heading">
        <h1>
          <FaSignInAlt /> Login
        </h1>
        <p>Login</p>
      </section>
      <section className="form">
        <form onSubmit={submitHandler}>
          <div className="form-group">
            <input
              type="email"
              name="email"
              value={email}
              placeholder="Enter your email"
              onChange={changeHandler}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              name="password"
              value={password}
              placeholder="Enter password"
              onChange={changeHandler}
            />
          </div>
          <div className="form-group">
            <button type="submit">Submit</button>
          </div>
        </form>
      </section>
    </main>
  );
};

export default Login;
