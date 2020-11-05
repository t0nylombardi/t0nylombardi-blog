import * as React from "react";
import { Post } from "../../types/types";
import { Link } from "react-router-dom";

const moment = require("moment");

interface PostsProps {
  posts: Post[];
}

const Posts: React.FC<PostsProps> = ({ posts }) => {
  const CHARLENGTH = 175;

  return (
    <div>
      {posts.map((post, index) => {
        return (
          <ol className="post-list" key={index}>
            <li>
              <h1 className="post-title text-3xl mt-0 mb-2 leading-5">
                <Link to={`/posts/${post.id}`} className="hover:text-blog-red">
                  {post.title}
                </Link>
              </h1>
              <p className="excerpt m-0 text-gray-999 text-lg">
                {post.body.length > CHARLENGTH
                  ? post.body.substring(0, CHARLENGTH - 3) + "..."
                  : post.body}
              </p>
              <div className="post-list-meta ">
                <time>
                  {moment(post.created_at).format("dddd, MMMM Do YYYY")}
                </time>
                •
                <span>
                  on <a href="/slugs?ruby">Ruby</a>
                </span>
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
