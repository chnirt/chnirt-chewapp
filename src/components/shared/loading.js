import React from "react";
// import { Spin } from "antd";

function loading() {
  return (
    <div
      style={{
        textAlign: "center",
        borderRadius: "4px",
        marginBottom: "20px",
        padding: "30px 50px",
        margin: "20px 0"
      }}
    >
      {/* <Spin size="large" /> */}
      Loading...
    </div>
  );
}

export default loading;
