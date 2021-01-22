const Button = ({ children }) => {
  return (
    <>
      <button className="focus:outline-none hover:bg-blog-red text-blog-red hover:text-gray-dark">
        {children}
      </button>
      <style jsx global>{`
        button {
          font-weight: 700;
          border-width: 1px;
          border-radius: 9999px;
          border-color: rgba(255, 255, 255, var(--tw-border-opacity));
          padding: 0.5rem 1rem;
          background-color: transparent;
          box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
            var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
          --tw-border-opacity: 1;
          -tw-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1),
            0 1px 2px 0 rgba(0, 0, 0, 0.06);
          -tw-text-opacity: 1;
          color: rgba(185, 48, 28, var(--tw-text-opacity));
        }
      `}</style>
    </>
  );
};

export default Button;
