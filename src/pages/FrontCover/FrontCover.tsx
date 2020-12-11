import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import Button from "../../components/Button/Button";
import "./FrontCover.css";

const FrontCover: React.FC = () => {
  const [url, setUrl] = useState(true);

  return (
    <div className="front-cover h-screen bg bg-cover">
      <div className="flex justify-center w-full h-screen bg-gradient-to-t from-gray-dark bg-cover">
        <div className="flex flex-col justify-center items-center">
          <a href="/">
            <img
              className="w-16 sm:w-32 shadow-xl rounded-full border-2 border-white"
              src="https://placebeard.it/256x256"
              alt="t0nylombardi"
            />
          </a>

          <div className="flex flex-col mx-3 justify-center items-center">
            <h1 className="text-xs sm:text-2xl lg:text-4xl mx-3 text-shadow-lg text-white">
              t0nylombardi
            </h1>
            <div className="text-blog-red sm:text-1xl mt-2">
              t0nylombardi.com blog
            </div>
          </div>

          <div className="social-wrapper mt-6 w-auto">
            <div className="mb-10 focus:outline-none">
              <Link
                to={url ? "/resume" : "/"}
                className="focus:outline-none"
                onClick={() => setUrl(!url)}
              >
                <Button>{url ? "RESUME" : "BLOG"}</Button>
              </Link>
            </div>

            <div className="socials flex flex-wrap flex-col">
              <Button className="mx-2 rounded-full">
                <FontAwesomeIcon icon={faTwitter} />
              </Button>
              <Button className="mx-2 rounded-full">
                <FontAwesomeIcon icon={faLinkedin} />
              </Button>
              <Button className="mx-2 rounded-full">
                <FontAwesomeIcon icon={faGithub} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrontCover;
