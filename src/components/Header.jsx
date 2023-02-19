import {  FaSignOutAlt } from "react-icons/fa";

import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../features/auth/authSlice";

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // const token = JSON.parse(localStorage.getItem("userToken"));
  const { user } = useSelector((state) => state.auth);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };

  return (
    <header className="header">
      <div className="logo">
        <Link to={"/"}>Krysto-go collecte</Link>
      </div>

      <ul>
        {user ? (
          <li>
            <button className="btn" onClick={onLogout}>
              {" "}
              <FaSignOutAlt /> deconnection{" "}
            </button>
          </li>
        ) : (
          ""
        )}
      </ul>
    </header>
  );
}

export default Header;
