import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import Button from '../Button/Button';

const SidePanel = ({ onChildClick }) => {
  const router = useRouter();

  return (
    <div>
      <div className="front-cover flex h-full bg bg-cover">
        <div className="flex justify-center w-full h-screen bg-gradient-to-t from-gray-dark bg-cover">
          <div className="flex flex-col justify-center items-center">
            <Link href="/">
              <a>
                <img
                  className="w-32 sm:w-16 md:w-32 shadow-xl rounded-full border-2 border-white"
                  src="https://placebeard.it/256x256"
                  alt="Portrait of a beared figure."
                />
              </a>
            </Link>

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
        .bg {
          background-image: url('/assets/alex-perez-bg.jpg');
        }

        .socials button {
          margin: 0.5rem;
        }
      `}</style>
    </div>
  );
};

export default SidePanel;
