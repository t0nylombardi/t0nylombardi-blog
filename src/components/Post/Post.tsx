import React, { useState, useEffect } from "react";
import { Post } from "../../types/types";
import BlogDataService from "../../api/services/BlogService";
import { Link } from "react-router-dom";
import "./Post.scss";

import Markdown from "react-markdown";
import codeFrontmatter from "remark-code-frontmatter";
import html from "remark-html";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

const UsePost: React.FC = (props) => {
  const [post, setPost] = useState<Post>({
    id: 0,
    title: "",
    body: "",
    created_at: "",
    slug: [],
  });

  useEffect(() => {
    getPost(props);
  }, [props]);

  const getPost = (props: any) => {
    BlogDataService.get(props.match.params.id)
      .then((response) => {
        setPost(response.data);
        console.log("success: ", response.data);
      })
      .catch((e) => {
        console.log("error: ", e);
      });
  };

  const renderers = {
    code: ({ language, value }: any) => {
      return (
        <SyntaxHighlighter
          style={dracula}
          language={language}
          children={value}
        />
      );
    },
  };

  return (
    <div className="post overflow-scroll mx-auto mt-6 px-2">
      <div className="post-list-meta">
        <time className="">{post.created_at}</time>•
        <span className="">
          on <a href="">{post.slug}</a>
        </span>
      </div>
      <div className="header text-5xl">
        <h1 className="m-0">{post.title}</h1>
      </div>
      <div className="markdown-content">
        <Markdown
          plugins={[html, codeFrontmatter]}
          renderers={renderers}
          children={post.body}
        />
      </div>
      <div className="mt-6 mb-24">
        <Link to="/" className="text-blog-red focus:outline-none">
          &#60;&#45;&#45;&#45;&#45;&#32;back
        </Link>
      </div>
    </div>
  );
};

export default UsePost;
