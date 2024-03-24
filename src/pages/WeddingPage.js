import collage from '../assests/weddingImages/collage.png';
import title from '../assests/weddingImages/title.png';
import info from '../assests/weddingImages/info.png';

const ContactPage = () => {
  return (
    <div className="w-full h-screen overflow-x-hidden snap-mandatory snap-y scroll-smooth">
    
      <div className="h-screen w-full flex flex-col justify-center items-center bg-[#1baa9d] snap-start scroll-smooth">
        
        <div className="w-full px-20 flex justify-center items-center bg-[#1baa9d]">
          <img src={title} alt="page title" className="my-4" />
        </div>

        <div className="w-full flex justify-center px-20">
          <img
            src={collage}
            alt="Collage of Aoife & Oisín"
            className=" w-[96%] bg-slate-200"
          />
        </div>

      </div>

      <div className="h-screen snap-start scroll-smooth flex flex-col justify-center items-center md:flex-row pt-1">

        {/* Wedding info */}
        <div className="w-full h-2/3 mb-2 md:h-full md:w-3/5">
          <img src={info} alt="Wedding info" className="bg-slate-200 w-full h-full" />
        </div>

         {/* google map */}
        <div className="w-full h-1/3 md:w-2/5 flex justify-center items-center bg-white">
          {/* google */}
          <div className="w-2/3 h-full">
            <iframe
              width="100%"
              height="100%"
              src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Foley's%20Bar,%201%20Merrion%20Row,%20Dublin%202,%20D02%20HY07,%20Ireland+(Foleys%20Bar)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" title="Google map"
            >
              <a href="https://www.gps.ie/">gps vehicle tracker</a>
            </iframe>
          </div>
          {/* google */}
        </div>

      </div>


    </div>
  );
};

export default ContactPage;
