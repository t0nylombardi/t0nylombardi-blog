import React, { useEffect, useState } from 'react';
import Container from '../components/Container';
import PostsListLoader from '../components/PostLoader';
import Posts from '../components/Posts/Index';
import SidePanel from '../components/SidePanel/SidePanel';
import { Post } from '../types';
import BlogDataService from './api/BlogService';

const Home = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
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
        console.log('error: ', e);
        setError(true);
        setErrorMessage(e.message);
        setLoading(true);
      });
  };

  return (
    <div className="flex flex-wrap overflow-hidden w-screen h-screen">
      <div className="w-2/5 lg:w-1/5">
        <SidePanel />
      </div>

      <div className="w-2/5 lg:w-4/5 overflow-scroll">
        <div className="blog-wrapper w-full bg-white overflow-hidden">
          <Container>
            <div className="post-list-wrapper mt-24">
              {error || loading ? <PostsListLoader /> : <Posts posts={posts} />}
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Home;
