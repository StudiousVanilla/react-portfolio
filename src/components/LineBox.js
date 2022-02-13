const LineBox = ({ logo, logoAltText }) => {
  return (
    <div className="w-full h-full bg-transparent flex justify-center items-center rounded-xl relative">
      <div className="absolute w-full h-5/6 border-b-2 border-t-2 border-slate-700" />
      <div className="absolute w-5/6 h-full border-l-2 border-r-2 border-slate-700" />
      <div className="absolute w-5/6 h-5/6 bg-slate-900 border-2 border-slate-700 flex justify-center items-center">
        <img src={logo} alt={logoAltText} className='w-4/5 rounded-xl' />
      </div>
    </div>
  );
};

export default LineBox;
