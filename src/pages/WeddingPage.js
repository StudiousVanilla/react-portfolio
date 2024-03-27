import collage from '../assests/weddingImages/collage.png';

const ContactPage = () => {
  return (
    <div className="w-full h-screen overflow-x-hidden snap-mandatory snap-y scroll-smooth">
      {/* 1st page */}
      <div className="h-screen w-full flex flex-col justify-center items-center bg-[#f2dddd] snap-start scroll-smooth">
        <p className="md:text-9xl text-4xl text-[#1ca89b] font-[Lora] font-extrabold mb-12 italic">
          Aoife & Oisín
        </p>
        <p className="flex text-2xl text-[#1ca89b] font-[Lora] font-light">
          9 August 2024
        </p>
      </div>

      {/* 2nd page */}
      <div className="h-screen w-full flex flex-col justify-center items-center snap-start scroll-smooth bg-white">
        <img
          src={collage}
          alt="Collage of Aoife & Oisín"
          className="md:w-screen md:h-screen"
        />
      </div>

      {/* 3rd page */}
      <div className="h-screen w-full flex flex-col justify-center items-center bg-white snap-start scroll-smooth">
        <p className="flex md:text-6xl text-3xl text-[#1ca89b] font-[Lora] font-light mb-12">
          We're Getting <i>Married!</i>
        </p>
        <p className="text-center md:text-3xl text-md text-[#1ca89b] font-[Mulish] font-light mb-12">
          AND WE'D LOVE FOR YOU TO JOIN US TO CELEBRATE
        </p>
      </div>

      {/* 4th page */}
      <div className="h-screen w-full flex flex-col justify-center items-center text-center bg-white snap-start scroll-smooth">
        <div className="w-full flex flex-wrap flex-col items-center mb-20 text-[#1ca89b]">
          <p className="md:mb-6 mb-2">
            <span className="md:text-3xl text-lg text-[#1ca89b] font-[Mulish] font-light mr-2">
              FROM
            </span>
            <span className="md:text-5xl text-2xl text-[#1ca89b] font-[Lora] font-light">
              8.00pm
            </span>
          </p>
          <p className=' flex justify-center items-end'>
            <span className="md:text-3xl text-lg text-[#1ca89b] font-[Mulish] font-light mr-2">
              AT
            </span>
            <div>
              <a
                href="https://maps.app.goo.gl/oxoeV2vk3CLbasAe8"
                className="ani-underline"
              >
                <p className="md:text-5xl text-2xl text-[#1ca89b] font-[Lora] font-light mr-2 inline-block">
                  Foley's Bar
                </p>
              </a>
            </div>
            <span className="md:text-3xl text-lg text-[#1ca89b] font-[Mulish] font-light mr-2 inline">
              IN DUBLIN 2
            </span>
          </p>
        </div>
        <div className="w-full flex flex-col items-center md:text-3xl text-lg text-[#1ca89b] font-[Mulish] font-light">
          <p>
            {' '}
            <span className="md:text-5xl text:2xl text-[#1ca89b] font-[Lora] font-light">
              RSVP BY 10 MAY 2024
            </span>{' '}
            TO AOIFEOISINWEDDING@GMAIL.COM
          </p>{' '}
          <br />
          <p>NO NEED FOR PRESENTS, YOUR PRESENCE IS GIFT ENOUGH</p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
