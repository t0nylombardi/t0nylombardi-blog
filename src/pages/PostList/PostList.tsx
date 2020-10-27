import React from "react";
import Container from "../../components/Container/Container";

const PostList: React.FC = () => {
  return (
    <div className="blog-wrapper overflow-scroll w-9/12 bg-white">
      <Container>
        <div className="post-list-wrapper">
          <ol className="post-list">
            <li>
              <h2 className="post-title text-2xl mt-0 mb-2 leading-5">
                <a className="text-blog-black hover:text-blog-red" href="#">
                  Tracking Pixels in ruby
                </a>
              </h2>
              <p className="excerpt m-0 text-gray-999 text-sm">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque
                harum ad voluptas sit adipisci laborum libero iure explicabo,
                temporibus veniam fugit aliquam placeat odit architecto beatae
                saepe dolor, magni inventore magnam. Omnis, i...
              </p>
              <div className="post-list-meta">
                <time className="">Jan 25 2017</time>•
                <span className="">
                  on <a href="">Ruby</a>
                </span>
              </div>
              <hr className="post-list-divider" />
            </li>
          </ol>
        </div>
      </Container>
    </div>
  );
};

export default PostList;
