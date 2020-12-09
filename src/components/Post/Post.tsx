import React, { useState, useEffect } from "react";
import { Post } from "../../types/types";
import BlogDataService from "../../api/services/BlogService";
import { Link } from "react-router-dom";
import { DiscussionEmbed } from 'disqus-react';
import MarkdownContent from "../MarkdownContent/MarkdownContent";
import "./Post.scss";

const UsePost: React.FC = (props) => {
  const [post, setPost] = useState<Post>({
    id: 0,
    title: "",
    body: "",
    created_at: "",
    slug: "",
  });

  useEffect(() => {
    getPost(props);
  }, [props]);

  const getPost = (props: any) => {
    BlogDataService.get(props.match.params.id)
      .then((response) => {
        console.log("slug", props.match.params.id)
        console.log("posts", response.data)
        setPost(response.data);
      })
      .catch((e) => {
        console.log("error: ", e);
      });
  };

  return (
    <div className="post overflow-scroll mx-auto mt-6 px-2">
      <div className="mt-1 mb-1">
        <Link to="/" className="text-blog-red text-2xl focus:outline-none">
          &#60;&#45;&#45;&#45;&#45;&#32;back
        </Link>
      </div>
      <div className="post-list-meta">
        <time className="">{post.created_at}</time>
      </div>
      <div className="header text-5xl">
        <h1 className="m-0">{post.title}</h1>
      </div>
      <div className="markdown-content">
        <MarkdownContent content={post.body} />
      </div>
      <DiscussionEmbed
        shortname={'t0nylombardi'}
        config={
          {
            url: window.location.href,
            identifier: post.slug,
            title: post.title,
          }
        }
      />
      <div className="mt-6 mb-24">
        <Link to="/" className="text-blog-red text-2xl focus:outline-none">
          &#60;&#45;&#45;&#45;&#45;&#32;back
        </Link>
      </div>
    </div>
  );
};

export default UsePost;
