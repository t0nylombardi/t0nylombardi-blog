import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Markdown from "react-markdown";
import codeFrontmatter from "remark-code-frontmatter";
import html from "remark-html";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";
import axios from "axios";

const Post: React.FC = () => {
  const readmePath = require("../../_posts/2016-07-19-Sorry-I-hacked-you.md");
  const [md, setMd] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://raw.githubusercontent.com/t0nylombardi/blog/gh-pages/_posts/2016-07-19-Sorry-I-hacked-you.md"
      )
      .then((res) => {
        console.log("md", res);
        setMd(res.data);
      });
  });

  const renderers = {
    code: ({ language, value }: any) => {
      return (
        <SyntaxHighlighter
          style={darcula}
          language={language}
          children={value}
        />
      );
    },
  };

  return (
    <div className="post overflow-scroll mx-auto mt-6 px-2">
      <div className="post-list-meta">
        <time className="">Jan 25 2017</time>•
        <span className="">
          on <a href="">Ruby</a>
        </span>
      </div>
      <div className="header text-5xl">
        <h1 className="m-0">Tracking Pixels in ruby</h1>
      </div>
      <div className="md-content">
        <Markdown
          plugins={[html, codeFrontmatter]}
          renderers={renderers}
          children={md}
        />
      </div>
      <div className="mt-6">
        <Link to="/" className="text-blog-red focus:outline-none">
          &#60;&#45;&#45;&#45;&#45;&#32;back
        </Link>
      </div>
    </div>
  );
};

export default Post;
