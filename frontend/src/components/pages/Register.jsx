import { useState, useEffect } from "react";
import { FaUser } from "react-icons/fa";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;

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
          <FaUser /> Register
        </h1>
        <p>Please create an account</p>
      </section>
      <section className="form">
        <form onSubmit={submitHandler}>
          <div className="form-group">
            <input
              type="text"
              name="name"
              value={name}
              placeholder="Enter your name"
              onChange={changeHandler}
            />
          </div>
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
            <input
              type="password"
              name="password2"
              value={password2}
              placeholder="Confirm password"
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

export default Register;
