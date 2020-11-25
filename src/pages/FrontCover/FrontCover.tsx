import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { RESUME } from "../../routes/routes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import Button from "../../components/Button/Button";

const FrontCover: React.FC = () => {
  const [url, setUrl] = useState(true);

  return (
    <div className="front-cover w-2/5 flex h-full bg-rand-front-cover bg-cover justify-center items-center">
      <div className="flex justify-center w-full h-full bg-gradient-to-t from-gray-dark bg-cover">
        <div className="flex flex-col justify-center items-center">
          <a href="#">
            <img
              className="w-64 shadow-xl rounded-full border-2 border-white"
              src="https://placebeard.it/256x256"
              alt="t0nylombardi"
            />
          </a>

          <div className="flex flex-col justify-center items-center">
            <h1 className="text-4xl text-shadow-lg text-white">t0nylombardi</h1>
            <div className="text-blog-red mt-2">t0nylombardi.com blog</div>
          </div>

          <div className="social-wrapper flex flex-row justify-center items-center mt-4 mb-6">
            <div className="mr-6 group focus:outline-none">
              <Link
                to={url ? "/resume" : "/"}
                className="focus:outline-none"
                onClick={() => setUrl(!url)}
              >
                <Button>{url ? "RESUME" : "BLOG"}</Button>
              </Link>
            </div>

            <div className="socials flex flex-row">
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