import Project from '../components/Project';
import IconSelection from '../components/IconSelection';
import tsbPreview from '../assests/projectPreviews/tsbPreview.png';
import tsbGif from '../assests/projectGifs/tsbGif.gif';
import DrinkMXRPreview from '../assests/projectPreviews/DrinkMXRPreview.png';
import DrinkMXRGif from '../assests/projectGifs/DrinkMXRGif.gif';
import arrow from '../assests/icons/arrow2.svg';
import XmasLogo from '../assests/projectIcons/XmasLogo.svg';
import DrinkMXR from '../assests/projectIcons/DrinkMXRLogo.svg';
import TSBLogo from '../assests/projectIcons/TSBLogo.svg';

const ProjectsPage = () => {
  return (
    <div className="relative max-w-screen flex flex-col justify-evenly items-center bg-slate-900 pb-4 pt-4 overflow-hidden">

      <div className="absolute w-full h-full boxes z-0" />

      <div className="flex h-screen w-full justify-center items-center">

        <div className="relative h-2/3 w-1/4 min-w-[425px] flex flex-col justify-start items-center text-center rounded-lg py-8 mx-4 text-slate-100 bg-red-00 z-10">
          <p className='text-6xl font-bold'>Choose a project to see more details</p>
          <div className='w-1/2 max-w-[180px] ml-20 rotate-180' id="arrow">
            <img src={arrow} alt="arrow" className='animate-pulse'></img>
          </div>
        </div>

       

        <div className="h-2/3 w-2/5 min-w-[425px] max-w-[690px] rounded-lg text-slate-900 mx-4 z-10">
          <IconSelection />
        </div>

      </div>

      <div className="w-full h-full hidden project" id="XMAS">
        <Project
          borderId="XMASBorder"
          broswerId="XMASBrowser"
          logo={XmasLogo}
          logoAltText="Xmas Logo"
          preview={DrinkMXRPreview}
          previewAlt="Preview"
          gif={DrinkMXRGif}
          gifAlt="gif"
        />
      </div>
      <div className="w-full h-full hidden project" id="DrinkMXR">
        <Project
          borderId="DrinkMXRBorder"
          broswerId="DrinkMXRBrowser"
          logo={DrinkMXR}
          logoAltText="DrinkMXR Logo"
          preview={DrinkMXRPreview}
          previewAlt="Preview"
          gif={DrinkMXRGif}
          gifAlt="gif"
        />
      </div>
      <div className="w-full h-full hidden project" id="TSB">
        <Project
          borderId="TSBBorder"
          broswerId="TSBBrowser"
          logo={TSBLogo}
          logoAltText="TSB Logo"
          preview={tsbPreview}
          previewAlt="TSB Preview"
          gif={tsbGif}
          gifAlt="TSB gif"
        />
      </div>
    </div>
  );
};

export default ProjectsPage;
