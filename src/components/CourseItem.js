const CourseItem = ({ link, name, image, finished }) => {
  const isFinished = finished;

  return (
    <a href={link} target="_blank" rel="noreferrer">
      <div className="relative h-28 w-28 sm:h-32 sm:w-32 md:h-44 md:w-44 mx-2 flex flex-col items-center justify-evenly rounded-xl bg-white group border-4 border-white hover:border-sky-500 hover:cursor-pointer">

        <p className="text-sm font-bold md:text-base mx-auto text-center">{name}</p>

        <img
          src={image}
          alt="docker"
          className="w-1/5 sm:w-10 md:w-2/5 group-hover:animate-wiggle"
        />

        <div className="w-full">
          <p className="text-xs md:text-sm font-light font-i md:-mb-2 ml-2">Status:</p>
          <div>
            {isFinished && (
              <div className="flex items-center">
                <p className="text-sm mr-1 md:text-base ml-2 md:mr-2">Complete</p>
                <svg
                  className=" w-4 h-4 md:w-8 md:h-8 animate-lilBounce"
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
              </div>
            )}
            {!isFinished && (
              <div className="flex items-center">
                <p className="text-sm mr-1 md:text-base ml-2 md:mr-2">In progress</p>
                <svg
                  className="h-4 w-4 md:w-8 md:h-8 animate-pulse"
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
              </div>
            )}
          </div>
        </div>

        <div className="absolute invisible group-hover:visible right-1 top-1">
          <svg
            className="w-3 h-3 md:w-5 md:h-5 text-sky-500"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
            <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
          </svg>
        </div>
      </div>
    </a>
  );
};

export default CourseItem;
