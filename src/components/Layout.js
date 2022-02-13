import Project from './Project';
import IconSelection from './IconSelection';
import tsbPreview from '../assests/projectPreviews/tsbPreview.png';
import tsbGif from '../assests/projectGifs/tsbGif.gif';
import DrinkMXRPreview from '../assests/projectPreviews/DrinkMXRPreview.png';
import DrinkMXRGif from '../assests/projectGifs/DrinkMXRGif.gif';
import XmasLogo from '../assests/projectIcons/XmasLogo.svg';
import DrinkMXR from '../assests/projectIcons/DrinkMXRLogo.svg';
import TSBLogo from '../assests/projectIcons/TSBLogo.svg';

const Layout = () => {
  return (
    <div className="max-w-screen min-h-screen h-fit flex flex-col justify-evenly items-center bg-slate-900 pb-4 pt-4 overflow-hidden">
      <IconSelection />
      <div className="w-full h-full hidden project" id="XMAS">
        <Project
          borderId="XMASBorder"
          broswerId="XMASBrowser"
          logo={XmasLogo}
          logoAltText="Xmas Logo"
          preview=""
          previewAlt="Preview"
          gif=""
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

export default Layout;
