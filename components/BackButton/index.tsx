import Link from 'next/link';
import { useRouter } from 'next/router';

const BackButton = () => {
  const router = useRouter();

  return (
    <Link href="/">
      <a
        onClick={() => router.back()}
        className="text-blog-red text-2xl focus:outline-none"
      >
        &#60;&#45;&#45;&#45;&#45;&#32;BACK
      </a>
    </Link>
  );
};

export default BackButton;
