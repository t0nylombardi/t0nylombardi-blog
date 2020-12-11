import React from "react";
import { BrowserRouter as Switch, Route } from "react-router-dom";
import FrontCover from "./pages/FrontCover/FrontCover";
import PostList from "./pages/PostList/PostList";
import PostPage from "./pages/PostPage/PostPage";
import Resume from "./pages/Resume/Resume";
import { RESUME } from "./routes/routes";

// const NotFound = () => <div>Not found</div>;

const App = () => {
  return (
    <div className="flex h-screen -mx-2">
      <Switch>
        <div className="w-1/3 md:w-1/5">
          <FrontCover />
        </div>
        <div className="w-4/6 md:w-4/5 overflow-scroll">
          <Route exact path="/" component={PostList} />
          <Route exact path="/posts/:id" component={PostPage} />
          <Route path={RESUME} component={Resume} />
        </div>
      </Switch>
    </div>
  );
};

export { App };
