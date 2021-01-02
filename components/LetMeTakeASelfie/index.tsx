import Link from 'next/link';

const getRandomSelfie = (): number => {
  return Math.floor(Math.random() * 10) + 1;
};

const LetMeTakeASelfie = () => {
  const picInt = getRandomSelfie();

  return (
    <Link href="/">
      <a>
        <img
          className="w-40 h-40 shadow-xl rounded-full border-2 border-white object-cover"
          src={`/assets/selfies/al_selfie_${picInt}.jpg`}
          alt="Portrait of a bearded figure."
        />
      </a>
    </Link>
  );
};

export default LetMeTakeASelfie;
