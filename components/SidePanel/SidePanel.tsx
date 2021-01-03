import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import Button from '../Button/Button';
import LetMeTakeASelfie from '../LetMeTakeASelfie/';

const SidePanel = ({ onChildClick }) => {
  return (
    <div>
      <div className="front-cover flex h-full">
        <div className="flex justify-center w-full h-screen">
          <div className="flex flex-col justify-center items-center">
            <LetMeTakeASelfie />

            <div className="flex flex-col mb-6 justify-center items-center">
              <h1 className="text-2xl lg:text-4xl text-shadow-lg text-white">
                t0nylombardi
              </h1>
              <div className="text-blog-red mt-2">A t0nylombardi blog</div>
            </div>

            <div className="social-wrapper flex flex-col justify-center items-center mt-6 w-auto">
              <div className="mb-10 focus:outline-none">
                <Link href="/">
                  <a onClick={onChildClick}>
                    <Button>BLOG</Button>
                  </a>
                </Link>
              </div>

              <div className="socials flex flex-wrap flex-row">
                <Link href="/resume">
                  <a onClick={onChildClick}>
                    <Button>RESUME</Button>
                  </a>
                </Link>

                <a href="https://twitter.com/t0nylombardi" target="_blank">
                  <Button>
                    <FontAwesomeIcon icon={faTwitter} />
                  </Button>
                </a>

                <a
                  href="https://www.linkedin.com/in/anthonyjlombardi/"
                  target="_blank"
                >
                  <Button>
                    <FontAwesomeIcon icon={faLinkedin} />
                  </Button>
                </a>

                <a href="https://github.com/t0nylombardi" target="_blank">
                  <Button>
                    <FontAwesomeIcon icon={faGithub} />
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx global>{`
        .front-cover {
          background-color: #1e1e1e;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 80 80' width='80' height='80'%3E%3Cpath fill='%23d91013' fill-opacity='0.4' d='M14 16H9v-2h5V9.87a4 4 0 1 1 2 0V14h5v2h-5v15.95A10 10 0 0 0 23.66 27l-3.46-2 8.2-2.2-2.9 5a12 12 0 0 1-21 0l-2.89-5 8.2 2.2-3.47 2A10 10 0 0 0 14 31.95V16zm40 40h-5v-2h5v-4.13a4 4 0 1 1 2 0V54h5v2h-5v15.95A10 10 0 0 0 63.66 67l-3.47-2 8.2-2.2-2.88 5a12 12 0 0 1-21.02 0l-2.88-5 8.2 2.2-3.47 2A10 10 0 0 0 54 71.95V56zm-39 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm40-40a2 2 0 1 1 0-4 2 2 0 0 1 0 4zM15 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm40 40a2 2 0 1 0 0-4 2 2 0 0 0 0 4z'%3E%3C/path%3E%3C/svg%3E");
        }

        .socials button {
          margin: 0.5rem;
        }
      `}</style>
    </div>
  );
};

export default SidePanel;
