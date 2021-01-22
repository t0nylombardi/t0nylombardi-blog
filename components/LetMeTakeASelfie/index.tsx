import Link from 'next/link';

const LetMeTakeASelfie = () => {
  return (
    <Link href="/">
      <a>
        <img
          className="md:w-40 w-16 shadow-xl rounded-full border-2 border-white object-cover"
          src="https://placebeard.it/256x256"
          alt="Portrait of a bearded figure."
        />
      </a>
    </Link>
  );
};

export default LetMeTakeASelfie;
