import React, { useContext, useRef } from "react";

import { CTX } from "../../tools/context";

function index(props) {
  const authContext = useContext(CTX);
  const { authenticate } = authContext;

  const email = useRef();
  const password = useRef();

  function onLogin(e) {
    e.preventDefault();
    const accessToken = email.current.value + password.current.value;
    authenticate(accessToken);
  }
  return (
    <div>
      Login form
      <form onSubmit={onLogin}>
        <input ref={email} type="text" placeholder="email" />
        <br />
        <input ref={password} type="password" placeholder="password" />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default index;
