import * as React from "react";
import Container from "../../components/Container/Container";
import Post from "../../components/Post/Post";

const PostPage: React.FC = (props) => {
  return (
    <div>
      <Container>
        <Post {...props} />
      </Container>
    </div>
  );
};

export default PostPage;
