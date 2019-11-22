import React from "react";

import Context from "./tools/context";

import Root from "./pages";

class App extends React.PureComponent {
  render() {
    return (
      <div>
        123
        {/* asdasdassada */}
        <Context>
          <Root />
        </Context>
      </div>
    );
  }
}

export default App;
