import * as React from "react";
import { Post } from "../../types/types";
import MarkdownContent from "../MarkdownContent/MarkdownContent";
import { Link } from "react-router-dom";
import "./Posts.css";

const moment = require("moment");
interface PostsProps {
  posts: Post[];
}

const Posts: React.FC<PostsProps> = ({ posts }) => {
  return (
    <div>
      {posts.map((post, index) => {
        return (
          <ol className="post-list" key={index}>
            <li>
              <h1 className="post-title text-xl lg:text-4xl mt-0 mb-2 leading-5">
                <Link
                  to={`/posts/${post.slug}`}
                  className="hover:text-blog-red"
                >
                  {post.title}
                </Link>
              </h1>
              <p className="excerpt m-0 text-gray-999 text-xs lg:text-xl">
                <MarkdownContent content={post.body} needsElipses />
              </p>

              <div className="post-list-meta ">
                <time className="text-xs lg:text-xl">
                  {moment(post.created_at).format("dddd, MMMM Do YYYY")}
                </time>
              </div>
              <hr className="post-list-divider" />
            </li>
          </ol>
        );
      })}
    </div>
  );
};

export default Posts;
