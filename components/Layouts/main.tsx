const MainLayout = ({ children }) => {
  return (
    <div>
      <div className="main-container">
        <div className="content-wrapper">{children}</div>
      </div>
      <style jsx global>{`
        .main-container: {
          width: 100vw;
          height: 100vh;
          margin: auto;
        }
      `}</style>
    </div>
  );
};

export default MainLayout;
