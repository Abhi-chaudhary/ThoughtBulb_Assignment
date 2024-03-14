
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../redux/auth/authSlice";

function Heading() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const onLogout = () => {
    dispatch(authActions.logout());
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">Thought Bulb Ticket Manager</Link>
      </div>
      <ul>
        {user ? (
          <li>
            <button className="btn" onClick={onLogout}>
               Logout
            </button>
          </li>
        ) : (
          <>
            <li>
              <Link to="/login">
                Login
              </Link>
            </li>
            <li>
              <Link to="/register">
                 Register
              </Link>
            </li>
          </>
        )}
      </ul>
    </header>
  );
}

export default Heading;
