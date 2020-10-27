import React from "react";

interface Props {
  className?: React.HTMLAttributes<HTMLDivElement>;
}

const Button: React.FC<React.HTMLAttributes<HTMLDivElement>> = (props: any) => {
  return (
    <button className="focus:outline-none bg-transparent font-bold hover:bg-blog-red text-blog-red hover:text-gray-dark border border-white shadow py-2 px-4 rounded-full">
      {props.children}
    </button>
  );
};

export default Button;
