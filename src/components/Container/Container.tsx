import React from "react";

const Container = (props: any) => {
  return (
    <div className="wrapper w-4/5 overflow-scroll mx-auto mt-6 px-2">
      {props.children}
    </div>
  );
};

export default Container;
