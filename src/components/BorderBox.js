import LineBox from './LineBox';
import StackIcons from './StackIcons';

const BorderBox = ({
  logo,
  logoAltText,
  showLineBox,
  title,
  appDescription,
  appComments,
  techIcons,
}) => {
  return (
    <div className="bg-slate-800 flex justify-center items-center rounded-xl relative 
    min-w-[300px] min-h-[410px] 
    xs:min-w-[325px] xs:min-h-[425px] 
    md:min-w-[420px] md:min-h-[480px] 
    lg:min-w-[480px] lg:min-h-[550px] 
    xl:min-w-[550px] xl:min-h-[650px]
    xl:-ml-10">
      <div className="absolute w-full h-95 border-b border-t border-slate-700" />
      <div className="absolute w-95 h-full border-l border-r border-slate-700" />
      <div className="absolute w-95 h-95 bg-slate-900 border border-slate-700 flex flex-wrap justify-center items-center">
        {showLineBox && (
          <div className="absolute top-3 xs:-top-0 right-1 xs:right-1 sm:w-24 sm:h-24 sm:-top-12 sm:-right-12">
            <LineBox logo={logo} logoAltText={logoAltText} />
          </div>
        )}

        <div className="h-full w-full flex flex-col justify-start items-center px-3 xs:px-6 sm:px-10 text-white">
          <h1 className="text-xl sm:text-3xl lg:text-4xl font-bold pt-10 xs:pt-6 text-slate-100 sm:mt-3">
            {title}
          </h1>
          <div className="h-2/3 px-2 sm:px-6 mt-0 sm:mt-4 flex flex-col justify-evenly items-center">
            <p className='text-sm lg:text-xl font-semibold'>{appDescription}</p>
            <p className='text-sm lg:text-xl font-semibold'>{appComments}</p>
          </div>
        </div>



        <div className="h-10 xs:h-16 w-full absolute bottom-2 bg-slate-900 rounded-lg">
          <StackIcons techIcons={techIcons} />
        </div>
      </div>
    </div>
  );
};

export default BorderBox;
