const LineBox = ({ logo, logoAltText }) => {
  return (
    <div className="w-2/3 h-2/3 sm:w-3/4 sm:h-3/4 xl:w-full xl:h-full bg-transparent flex justify-center items-center rounded-xl relative">
      <div className="absolute w-full h-5/6 border-b-2 border-t-2 border-slate-700  min-h-[80px]" />
      <div className="absolute w-5/6 h-full border-l-2 border-r-2 border-slate-700  min-w-[80px]" />
      <div className="absolute w-5/6 h-5/6 bg-slate-900 border-2 border-slate-700 flex justify-center items-center min-w-[76px] min-h-[80px]">
        <img src={logo} alt={logoAltText} className='w-4/5 max-w-[60px] max-h-[60px] sm:max-w-[120px] sm:max-h-[100px] rounded-xl' />
      </div>
    </div>
  );
};

export default LineBox;
