import React, { useEffect, useState } from "react";
import Container from "../../components/Container/Container";
import Posts from "../../components/Posts/Posts";
import { Post } from "../../types/types";
import BlogDataService from "../../api/services/BlogService";
import PostsListLoader from "../../components/PostsLoader/PostsLoader";

const PostList: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = () => {
    BlogDataService.getAll()
      .then((response) => {
        setPosts(response.data);
        setLoading(false);
      })
      .catch((e) => {
        console.log("error: ", e);
        setError(true);
        setErrorMessage(e.message);
        setLoading(false);
      });
  };

  return (
    <div className="blog-wrapper w-full bg-white overflow-hidden">
      <Container>
        <div className="post-list-wrapper mt-18 pt-8">
          {error ? <PostsListLoader /> : <Posts posts={posts} />}
        </div>
      </Container>
    </div>
  );
};

export default PostList;
