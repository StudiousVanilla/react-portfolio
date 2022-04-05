import LineBox from './LineBox';

const BorderBox = ({ logo, logoAltText, showLineBox }) => {
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
        <div className="h-full w-full flex flex-col justify-start items-center text-white">
          <h1 className="text-3xl font-semibold py-10 text-slate-100 sm:mt-3">
            The Sounding Board
          </h1>
        </div>
      </div>
    </div>
  );
};

export default BorderBox;
