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

const SidePanel = () => {
  const router = useRouter();
  const [url, setUrl] = useState(true);
  console.log('href', router.pathname);

  return (
    <div>
      <div className="front-cover flex h-full bg bg-cover">
        <div className="flex justify-center w-full h-screen bg-gradient-to-t from-gray-dark bg-cover">
          <div className="flex flex-col justify-center items-center">
            <Link href="/">
              <img
                className="w-32 sm:w-16 md:w-32 shadow-xl rounded-full border-2 border-white"
                src="https://placebeard.it/256x256"
                alt="t0nylombardi"
              />
            </Link>

            <div className="flex flex-col mb-6 justify-center items-center">
              <h1 className="text-2xl lg:text-4xl text-shadow-lg text-white">
                t0nylombardi
              </h1>
              <div className="text-blog-red mt-2">t0nylombardi.com blog</div>
            </div>

            <div className="social-wrapper mt-6 w-auto">
              <div className="mb-10 focus:outline-none">
                <Link href="/resume">
                  <a
                    onClick={() =>
                      router.push('/resume', undefined, { shallow: true })
                    }
                  >
                    <Button>{url ? 'RESUME' : 'BLOG'}</Button>
                  </a>
                </Link>
              </div>

              <div className="socials flex flex-wrap flex-col">
                <Button>
                  <FontAwesomeIcon icon={faTwitter} />
                </Button>
                <Button>
                  <FontAwesomeIcon icon={faLinkedin} />
                </Button>
                <Button>
                  <FontAwesomeIcon icon={faGithub} />
                </Button>
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
