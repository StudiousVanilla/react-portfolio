import BorderBox from './BorderBox';
import BrowserBox from './BrowserBox';

// Title, Project content - pass down to BrowserBox

const Project = ({borderId, broswerId,logo, logoAltText, preview, previewAlt, gif, gifAlt}) => {
  return (
    <div className="h-screen w-full flex justify-evenly items-center">

      <div className="w-1/3 h-3/4 min-w-fit relative -left-[850px] transition-transform ease-in-out delay-500 duration-700" id={borderId}>
        <BorderBox logo={logo} logoAltText={logoAltText} />
      </div>

      <div className="w-1/3 h-2/5 relative -right-[850px] transition-transform ease-in-out delay-500 duration-700" id={broswerId}>
        <BrowserBox preview={preview} previewAlt={previewAlt} gif={gif} gifAlt={gifAlt} />
      </div>

    </div>
  );
};

export default Project;
