import React, { useContext } from "react";

import background from "../assets/images/background.jpeg";
import { CTX } from "../tools/context";

function Demo() {
  const authContext = useContext(CTX);

  return (
    <div>
      {authContext.isAuth}
      <button onClick={() => authContext.setIsAuth(authContext.isAuth + 1)}>
        setIsAuth
      </button>
      <h1>Hello World!</h1>
      <h2>Chnirt!</h2>
      <h3>Where r u?</h3>
      <img src={background} style={{ height: 300 }} />
    </div>
  );
}

export default Demo;
