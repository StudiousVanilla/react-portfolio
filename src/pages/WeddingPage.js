import collage from '../assests/weddingImages/collage.png';
import title from '../assests/weddingImages/title.png';
import info from '../assests/weddingImages/info.png';

const ContactPage = () => {
  return (
    <div className="w-full h-screen overflow-x-hidden snap-mandatory snap-y scroll-smooth">

        {/* 1st page */}
      <div className="h-screen w-full flex flex-col md:justify-center items-center bg-[#1baa9d] snap-start scroll-smooth">
        
        <div className="md:w-full md:px-20 md:mt-0 md:mb-0 flex justify-center items-center bg-[#1baa9d] w-2/3 mt-16 mb-4">
          <img src={title} alt="page title" className="my-4" />
        </div>

        <div className="w-full flex justify-center md:px-20">
          <img
            src={collage}
            alt="Collage of Aoife & Oisín"
            className="md:w-[96%] w-full bg-slate-200"
          />
        </div>

      </div>

      {/* 2nd page */}

      <div className="h-screen snap-start scroll-smooth flex flex-col justify-center items-center md:flex-row pt-1">

        {/* Wedding info */}
        <div className="w-full">
          <img src={info} alt="Wedding info" className="bg-slate-200 w-full h-full" />
        </div>

      </div>


    </div>
  );
};

export default ContactPage;
