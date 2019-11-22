import React, { useContext } from "react";

import { CTX } from "../../tools/context";

import Sidebar from "./sidebar";

function index(props) {
  const authContext = useContext(CTX);
  const { logout } = authContext;

  const { children } = props;

  const t = "helloT";

  function onLogout() {
    logout();
  }

  return (
    <div>
      Layout
      <button onClick={onLogout}>Logout</button>
      <Sidebar />
      {React.cloneElement(children, { t })}
    </div>
  );
}

export default index;
