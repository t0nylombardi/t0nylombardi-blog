import React from "react";

const Container = (props: any) => {
  return (
    <div className="container w-9/12 mx-auto mt-6 px-2">{props.children}</div>
  );
};

export default Container;
