import * as React from "react";
import Container from "../../components/Container/Container";
import Post from "../../components/Post/Post";

const PostPage: React.FC = () => {
  return (
    <div className="overflow-scroll">
      <Container>
        <Post />
      </Container>
    </div>
  );
};

export default PostPage;
