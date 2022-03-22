const CourseItem = ({ name, image, finished }) => {
  const isFinished = finished;

  return (
    <div className="flex items-end justify-between w-full">
      <div className="flex">
        <img src={image} alt="docker" className="h-8 mr-2" />
        <span>{name}... </span>
      </div>

      {isFinished && (
        <svg
          className="w-8 h-8"
          fill="green"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clipRule="evenodd"
          />
        </svg>
      )}
      {!isFinished && (
        <svg
          className="w-8 h-8 justify-self-end"
          fill="orange"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
            clipRule="evenodd"
          />
        </svg>
      )}
    </div>
  );
};

export default CourseItem;
