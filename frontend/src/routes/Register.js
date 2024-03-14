import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


import { useSelector, useDispatch } from "react-redux";
import { userRegThunk } from "../redux/auth/authSlice";
import { authActions } from "../redux/auth/authSlice";
 


function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
   
  });

  const { name, email, password } = formData;
  const { user, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      alert("Either user exists already or fill all data");
    }

    // Redirect when logged in
    if (isSuccess || user) {
      navigate("/");
    }

    dispatch(authActions.reset());
  }, [isError, isSuccess, user, message, navigate, dispatch]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

   
      const userData = {
        name,
        email,
        password,
      };

      dispatch(userRegThunk(userData));
    
  };



  return (
    <>
      <section className="heading">
        <h1>
           Register
        </h1>
        <p>Please create an account</p>
      </section>

      <section className="form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={name}
              onChange={onChange}
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={email}
              onChange={onChange}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={password}
              onChange={onChange}
              placeholder="Enter password"
              required
            />
          </div>
          
          <div className="form-group">
            <button className="btn btn-block">Submit</button>
          </div>
        </form>
      </section>
    </>
  );
}

export default Register;
