import * as React from "react";
import { Post } from "../../types/types";
import MarkdownContent from "../MarkdownContent/MarkdownContent";
import { Link } from "react-router-dom";

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
              <h1 className="post-title text-3xl mt-0 mb-2 leading-5">
                <Link
                  to={`/posts/${post.slug}`}
                  className="hover:text-blog-red"
                >
                  {post.title}
                </Link>
              </h1>
              <p className="excerpt m-0 text-gray-999 text-lg">
                <MarkdownContent content={post.body} needsElipses />
              </p>

              <div className="post-list-meta ">
                <time>
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
