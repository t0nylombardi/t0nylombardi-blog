const Button = ({ children }) => {
  return (
    <button className="mx-2 rounded-full focus:outline-none bg-transparent font-bold hover:bg-blog-red text-blog-red hover:text-gray-dark border border-white shadow py-2 px-4 rounded-full">
      {children}
    </button>
  );
};

export default Button;
