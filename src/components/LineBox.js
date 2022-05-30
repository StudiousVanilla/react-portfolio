const LineBox = ({ logo, logoAltText }) => {
  return (
    <div className="xl:w-full xl:h-full w-3/4 h-3/4 bg-transparent flex justify-center items-center rounded-xl relative">
      <div className="absolute w-full h-5/6 border-b-2 border-t-2 border-slate-700" />
      <div className="absolute w-5/6 h-full border-l-2 border-r-2 border-slate-700" />
      <div className="absolute w-5/6 h-5/6 bg-slate-900 border-2 border-slate-700 flex justify-center items-center">
        <img src={logo} alt={logoAltText} className='w-4/5 rounded-xl max-w-[120px]' />
      </div>
    </div>
  );
};

export default LineBox;
