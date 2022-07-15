import BorderBox from './BorderBox';
import BrowserBox from './BrowserBox';

// Title, Project content - pass down to BrowserBox

const Project = ({
  borderId,
  broswerId,
  logo,
  logoAltText,
  preview,
  previewAlt,
  gif,
  gifAlt,
  title,
  appDescription,
  appComments,
  gitHubLink,
  techIcons,
  liveLink
}) => {
  return (
    <div className="min-h-[300px] md:min-h-[600px] h-screen w-full flex flex-col justify-center sm:justify-evenly items-center md:justify-evenly md:items-center md:flex-row md:mb-20 ">
      <div
        className="w-fit flex justify-center relative -left-[850px] transition-transform ease-in-out delay-500 duration-700"
        id={borderId}
      >
        <BorderBox
          logo={logo}
          logoAltText={logoAltText}
          showLineBox={true}
          title={title}
          appDescription={appDescription}
          appComments={appComments}
          techIcons={techIcons}
        />
      </div>
      
      <div
        className="w-fit flex justify-center relative -right-[850px] transition-transform ease-in-out delay-500 duration-700"
        id={broswerId}>
        <BrowserBox
          preview={preview}
          previewAlt={previewAlt}
          gif={gif}
          gifAlt={gifAlt}
          gitHubLink={gitHubLink}
          liveLink={liveLink}
        />
      </div>
    </div>
  );
};

export default Project;