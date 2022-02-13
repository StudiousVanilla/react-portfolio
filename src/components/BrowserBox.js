const BrowserBox = ({preview, previewAlt, gif, gifAlt}) => {
    return ( 
        <div className="max-w-[36rem] max-h-[20rem] min-w-[570px] min-h-[350px] h-full w-full flex flex-col justify-center items-center">
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
          <div className='w-full h-full group-hover:hidden'>
            <img src={preview} alt={previewAlt} />
          </div>
          <div className='w-full h-full hidden group-hover:block'>
          <img src={gif} alt={gifAlt} className="w-full h-full" />
          </div>
        </div>
      </div>
     );
}
 
export default BrowserBox;