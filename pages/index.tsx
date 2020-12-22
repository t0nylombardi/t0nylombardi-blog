import SidePanel from '../components/SidePanel/SidePanel';

const Home = () => {
  return (
    <div className="flex flex-wrap overflow-hidden w-screen h-screen">
      <div className="w-2/5 lg:w-1/5">
        <SidePanel />
      </div>

      <div className="w-2/5 lg:w-4/5 overflow-scroll">right</div>
    </div>
  );
};

export default Home;
