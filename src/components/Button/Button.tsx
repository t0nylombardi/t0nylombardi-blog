import React from "react";

interface Props {
  className?: React.HTMLAttributes<HTMLDivElement>;
}

const Button: React.FC<React.HTMLAttributes<HTMLDivElement>> = (props: any) => {
  return (
    <button className="bg-transparent hover:bg-blog-red text-blog-red hover:text-gray-900 font-semibold border border-white shadow py-2 px-4 rounded-full">
      {props.children}
    </button>
  );
};

export default Button;
