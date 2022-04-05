import LineBox from './LineBox';
import github from '../assests/icons/github.svg';
import StackIcons from './StackIcons';

const BorderBox = ({
  logo,
  logoAltText,
  showLineBox,
  title,
  appDescription,
  gitHubLink,
  techStack,
}) => {
  return (
    <div className="bg-slate-800 flex justify-center items-center rounded-xl relative  md:min-w-[420px] md:min-h-[480px] lg:min-w-[480px] lg:min-h-[550px] xl:-ml-10 xl:min-w-[550px] xl:min-h-[650px]">
      <div className="absolute w-full h-95 border-b border-t border-slate-700" />
      <div className="absolute w-95 h-full border-l border-r border-slate-700" />
      <div className="absolute w-95 h-95 bg-slate-900 border border-slate-700 flex justify-center items-center">
        {showLineBox && (
          <div className="absolute w-24 h-24 -top-12 -right-12">
            <LineBox logo={logo} logoAltText={logoAltText} />
          </div>
        )}
        <div className="absolute w-24 h-24 -bottom-10 left-3 opacity-50 hover:opacity-100">
          <a
            href={gitHubLink}
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={github}
              alt="github"
              className="xl:w-3/4 xl:h-3/4 w-1/2 h-1/2"
            />
          </a>
        </div>
        <div className="h-full w-full flex flex-col justify-start items-center px-10 text-white">
          <h1 className="text-3xl font-semibold pt-6 text-slate-100 sm:mt-3">
            {title}
          </h1>
          <div className=' h-3/4 py-5 flex flex-col justify-evenly'>
            <p>{appDescription}</p>
            <p className='text-center'>{techStack}</p>
            <div className='h-36 w-full bg-green-200'>
              <StackIcons/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BorderBox;
