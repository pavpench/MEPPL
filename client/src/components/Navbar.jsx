import React, {useContext } from "react";
import { Link } from "react-router-dom";
import { ChatContext } from "../context/SharedContext";


export default function NavBar() {
  const { state, dispatch } = useContext(ChatContext);
  const logout = () => {
    window.open("http://localhost:5001/auth/logout", "_self");
  };
  return (
    <div>
      <div className="navbar">
      <span className="logo">
        <Link className="link" to="/">
          Flock
        </Link>
      </span>
  
        <ul className="list">
          <li className="listItem">
            <img
              src={state.user.profilePhoto}
              alt=""
              className="avatar"
            />
          </li>
          <li className="listItem">{state.user.source ==='google'?state.user.firstName + ' ' + state.user.lastName:state.user.userName}</li>
          <li className="listItem" onClick={logout}>
            Logout
          </li>
        </ul>
      
    </div>
 
    </div>
  )
}