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
    <div className="flex h-screen">
      <Switch>
        <FrontCover />
        <Route exact path="/" component={PostList} />
        <Route exact path="/posts/:id" component={PostPage} />
        <Route path={RESUME} component={Resume} />
        {/* <Route component={NotFound} /> */}
      </Switch>
    </div>
  );
};

export { App };
