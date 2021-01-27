import Link from 'next/link';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';

const BackToMenu = ({ onChildClick, isVisable }) => {
  const router = useRouter();

  return (
    <>
      <button
        onClick={onChildClick}
        className={`back-button text-blog-red ${isVisable ? '' : 'hidden'}`}
      >
        <FontAwesomeIcon icon={faArrowAltCircleRight} size="4x" />
      </button>
      <style jsx>{`
        .back-button {
          position: absolute;
          top: 50%;
          left: 0;
          border-color: transparent;
          padding: 0 !important;
          border-width: none;
          background-color: transparent;
        }
      `}</style>
    </>
  );
};

export default BackToMenu;
