import github from '../assests/icons/github.svg';
import arrow from '../assests/icons/arrow2.svg';

const BrowserBox = ({ preview, previewAlt, gif, gifAlt, gitHubLink }) => {
  return (
    <div className="max-w-[36rem] max-h-[20rem] h-full w-full flex flex-col justify-center items-center sm:max-w-[480px] sm:max-h-[300px] md:max-w-[370px] md:max-h-[250px] lg:max-w-[460px] lg:max-h-[205px] xl:max-w-[520px] xl:max-h-[300px] relative group">
      <div className="relative w-full flex flex-col border rounded-t-lg border-slate-500">
        <div className="flex-none">
          <div className="flex items-center h-8 space-x-1.5 px-3">
            <div className="w-2.5 h-2.5 bg-slate-600 rounded-full"></div>
            <div className="w-2.5 h-2.5 bg-slate-600 rounded-full"></div>
            <div className="w-2.5 h-2.5 bg-slate-600 rounded-full"></div>
          </div>
        </div>
      </div>
      <div className=" border-b border-l border-r border-slate-500 h-full w-full flex justify-center items-center group">
        <div className="w-full h-full group-hover:hidden">
          <img src={preview} alt={previewAlt} />
        </div>
        <div className="w-full h-full hidden group-hover:block">
          <img src={gif} alt={gifAlt} className="w-full h-full" />
        </div>
      </div>

      <div className="absolute -top-20 -right-1 w-16 h-16 hover:opacity-100 flex justify-center items-start text-slate-100 font-bold rotate-[20deg] animate-pulse group-hover:text-slate-900 group-hover:bg-color-900 ease-in-out duration-1000">
          <p className='text-sm'>hover</p>
          <img
            src={arrow}
            alt="arrow"
            className="xl:w-1/2 xl:h-1/2 w-1/3 h-1/3 flip group-hover:opacity-0"
          />
      </div>




      <div className="absolute -bottom-24 right-0 w-16 h-16 opacity-50 hover:opacity-100">
        <a href={gitHubLink} target="_blank" rel="noreferrer">
          <img
            src={github}
            alt="github"
            className="xl:w-3/4 xl:h-3/4 w-1/2 h-1/2"
          />
        </a>
      </div>


    </div>
  );
};

export default BrowserBox;
