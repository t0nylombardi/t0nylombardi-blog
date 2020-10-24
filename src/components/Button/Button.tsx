import React from "react";

interface Props {
  children?: any;
}

const Button: React.FC<Props> = (children: Props) => {
  return (
    <button className="bg-transparent hover:bg-gray-100 text-white font-semibold border border-white shadow py-2 px-4 rounded-full">
      {children}
    </button>
  );
};

export default Button;
