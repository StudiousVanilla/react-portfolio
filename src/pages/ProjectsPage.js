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

      <div className="md:min-h-[650px] h-screen w-full flex justify-center items-center">

        <div className="relative h-2/3 w-1/4 min-w-[425px] flex flex-col justify-start items-center text-center rounded-lg py-8 mx-4 text-slate-100 bg-red-00 z-10">
          <p className='text-6xl font-bold'>Choose a project to see more details</p>
          <div className='w-1/2 max-w-[180px] ml-20 rotate-180' id="arrow">
            <img src={arrow} alt="arrow" className='animate-pulse'></img>
          </div>
        </div>

       

        <div className="h-3/4 md:min-h-[525px] w-2/5 min-w-[425px] max-w-[600px] rounded-lg text-slate-900 mx-4 z-10">
          <IconSelection />
        </div>

      </div>

      <div className="w-full h-full min-h-[600px] hidden project" id="XMAS">
        <Project
          borderId="XMASBorder"
          broswerId="XMASBrowser"
          logo={XmasLogo}
          logoAltText="Xmas Logo"
          preview={DrinkMXRPreview}
          previewAlt="Preview"
          gif={DrinkMXRGif}
          gifAlt="gif"
          title="Xmas Time-Machine"
          appDescription="DrinkMXR is a wesite to help you find the perfect drink. Select your ingredients and see all the different cocktails you could make."
          techStack="NodeJS/Express - GraphQL - Heroku - React - Tailwind CSS - Netlify"
          gitHubLink="https://github.com/StudiousVanilla/digital-card"
        />
      </div>
      <div className="w-full h-full min-h-[600px] hidden project" id="DrinkMXR">
        <Project
          borderId="DrinkMXRBorder"
          broswerId="DrinkMXRBrowser"
          logo={DrinkMXR}
          logoAltText="DrinkMXR Logo"
          preview={DrinkMXRPreview}
          previewAlt="Preview"
          gif={DrinkMXRGif}
          gifAlt="gif"
          title="Drink MXR"
          appDescription="DrinkMXR is a wesite to help you find the perfect drink. Select your ingredients and see all the different cocktails you could make."
          techStack="NodeJS/Express - GraphQL - Heroku - React - Tailwind CSS - Netlify"
          gitHubLink="https://github.com/StudiousVanilla/drinkmxr"
        />
      </div>
      <div className="w-full h-full min-h-[600px] hidden project" id="TSB">
        <Project
          borderId="TSBBorder"
          broswerId="TSBBrowser"
          logo={TSBLogo}
          logoAltText="TSB Logo"
          preview={tsbPreview}
          previewAlt="TSB Preview"
          gif={tsbGif}
          gifAlt="TSB gif"
          title="The Sounding Board"
          appDescription="DrinkMXR is a wesite to help you find the perfect drink. Select your ingredients and see all the different cocktails you could make."
          techStack="React - NodeJS/Express - Firebase - Heroku - Netlify"
          gitHubLink="https://github.com/StudiousVanilla/tsb"
        />
      </div>
    </div>
  );
};

export default ProjectsPage;
