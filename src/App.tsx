import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBlog } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const App = () => {
  return (
    <div className="bg-blue-200">
      <div className="flex h-screen">
        <div className="front-cover w-4/12 flex h-full bg-rand-front-cover bg-cover justify-center items-center">
          <div className="flex justify-center w-full h-full bg-gradient-to-t from-gray-800 to-transparent bg-cover">
            <div className="flex flex-col justify-center items-center">
              <a href="#">
                <img
                  className="w-64 shadow-xl rounded-full border-2 border-white"
                  src="https://placebeard.it/256x256"
                  alt="t0nylombardi"
                />
              </a>

              <div className="flex flex-col justify-center items-center">
                <h1 className="text-4xl text-shadow-lg text-white">
                  t0nylombardi
                </h1>
                <div className="text-gray-500 mt-2">t0nylombardi.com blog</div>
              </div>

              <div className="social-wrapper flex flex-row justify-center items-center mt-4 mb-6">
                <div className="mx-6">
                  <button className="bg-transparent hover:bg-gray-100 text-white hover:text-gray-900 font-semibold border border-white shadow py-2 px-4 rounded-full inline-flex items-center">
                    resume
                  </button>
                </div>
                <div className="flex flex-row">
                  <button className="bg-transparent hover:bg-gray-100 hover:text-gray-900 text-white font-semibold border border-white shadow py-2 px-4 mx-2 rounded-full">
                    <FontAwesomeIcon icon={faTwitter} />
                  </button>
                  <button className="bg-transparent hover:bg-gray-100 text-white hover:text-gray-900 font-semibold border border-white shadow py-2 px-4 mx-2 rounded-full">
                    <FontAwesomeIcon icon={faLinkedin} />
                  </button>
                  <button className="bg-transparent hover:bg-gray-100 text-white hover:text-gray-900 font-semibold border border-white shadow py-2 px-4 mx-2 rounded-full">
                    <FontAwesomeIcon icon={faGithub} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="blog-wrapper overflow-scroll w-9/12 bg-white">
          <div className="container w-9/12 mx-auto mt-6  px-2">
            <div className="post-list-wrapper">
              <ol className="post-list">
                <li>
                  <h2 className="post-title text-2xl mt-0 mb-2 leading-5">
                    <a className="text-blog-black hover:text-blog-red" href="#">
                      Tracking Pixels in ruby
                    </a>
                  </h2>
                  <p className="excerpt m-0 text-gray-999 text-sm">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Eaque harum ad voluptas sit adipisci laborum libero iure
                    explicabo, temporibus veniam fugit aliquam placeat odit
                    architecto beatae saepe dolor, magni inventore magnam.
                    Omnis, i...
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
          </div>
        </div>
      </div>
    </div>
  );
};

export { App };
