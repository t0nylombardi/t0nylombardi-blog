import moment from 'moment';

type Props = {
  date: string;
  originalDatePublished: string;
};

const DatePublished = ({ date, originalDatePublished }: Props) => {
  return (
    <div className="flex flex-col pb-8">
      <div>
        <span className="text-xs">Date Posted: </span>
        <time className="text-xs">
          {moment(date).format('dddd, MMMM Do YYYY')}
        </time>
      </div>
      <div>
        <span className="text-xs">Date Originally Posted: </span>
        <time className="text-xs">
          {moment(originalDatePublished).format('dddd, MMMM Do YYYY')}
        </time>
      </div>
    </div>
  );
};

export default DatePublished;
