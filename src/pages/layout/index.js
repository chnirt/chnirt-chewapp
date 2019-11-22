import React, { useContext } from "react";

import { CTX } from "../../tools/context";

function index(props) {
  const authContext = useContext(CTX);
  const { logout } = authContext;

  function onLogout() {
    logout();
  }

  return (
    <div>
      Layout
      <button onClick={onLogout}>Logout</button>
      {props.children}
    </div>
  );
}

export default index;
