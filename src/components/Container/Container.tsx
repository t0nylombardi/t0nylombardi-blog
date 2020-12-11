import React from "react";

const Container = (props: any) => {
  return (
    <div className="wrapper overflow-scroll mx-5 mt-12 px-8">
      {props.children}
    </div>
  );
};

export default Container;
