import React from "react";

const Time = async () => {
  const time = new Date().toLocaleTimeString();
  return (
    <React.Fragment>
      <main>{time}</main>
    </React.Fragment>
  );
};

export default Time;
