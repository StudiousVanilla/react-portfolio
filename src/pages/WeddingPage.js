import collage from '../assests/weddingImages/collage.png';
import title from '../assests/weddingImages/title.png';
import info from '../assests/weddingImages/info.png';

const ContactPage = () => {
  return (
    <div className="w-full h-screen overflow-x-hidden snap-mandatory snap-y scroll-smooth">

      {/* 1st page */}
      <div className="h-screen w-full flex flex-col md:justify-center items-center bg-[#f2dddd] snap-start scroll-smooth">
        <p className="flwx text-9xl text-[#1ca89b] font-[Lora] font-extrabold mb-12 italic">
          Aoife & Oisín
        </p>
        <p className="flex text-2xl text-[#1ca89b] font-[Lora] font-light">
          9 August 2024
        </p>
      </div>

      {/* 2nd page */}
      <div className="h-screen w-full flex flex-col md:justify-center items-center snap-start scroll-smooth">
        <img
          src={collage}
          alt="Collage of Aoife & Oisín"
          className="w-screen h-screen "
        />
      </div>

      {/* 3rd page */}
      <div className="h-screen w-full flex flex-col md:justify-center items-center bg-white snap-start scroll-smooth">
        <p className="flex text-6xl text-[#1ca89b] font-[Lora] font-light mb-12">
          We're Getting <i>Married!</i>
        </p>
        <p className="flex text-3xl text-[#1ca89b] font-[Mulish] font-light mb-12">
          AND WE'D LOVE FOR YOU TO JOIN US TO CELEBRATE
        </p>
      </div>

      {/* 4th page */}
      <div className="h-screen w-full flex flex-col md:justify-center items-center bg-white snap-start scroll-smooth">
        <div className="w-full flex flex-wrap flex-col items-center mb-20 text-[#1ca89b]">
          <p className='mb-6'>
            <span className='text-3xl text-[#1ca89b] font-[Mulish] font-light mr-2'>NIBBLES FROM</span>
            <span className='text-5xl text-[#1ca89b] font-[Lora] font-light'>8.30pm</span>
          </p>
          <p>
            <span className='text-3xl text-[#1ca89b] font-[Mulish] font-light mr-2'>AT</span>
            <span className='text-5xl text-[#1ca89b] font-[Lora] font-light mr-2'>Foley's Bar</span>
            <span className='text-3xl text-[#1ca89b] font-[Mulish] font-light mr-2'>IN</span>
            <span className='text-5xl text-[#1ca89b] font-[Lora] font-light'>Dublin 2</span>
          </p>
        </div>
        <div className="w-full flex flex-col items-center text-3xl text-[#1ca89b] font-[Mulish] font-light">
          <p>RSVP BY 10 MAY 2024 TO AOIFEOISINWEDDING@GMAIL.COM</p> <br />
          <p>NO NEED FOR PRESENTS, YOUTR PRESENCE IS GIFT ENOUGH</p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
