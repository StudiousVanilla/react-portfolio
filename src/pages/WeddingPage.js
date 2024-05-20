import React, { useState, useEffect } from 'react';
import collage from '../assests/weddingImages/collage.png';
import AoifeOisin from '../assests/weddingImages/AoifeOisin.svg';
import WereGettingMarried from '../assests/weddingImages/WereGettingMarried.svg';

const ContactPage = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      {screenWidth < 768 ? (
        <div className='w-screen h-screen figma-iframe-container'>
          {/* Render components for smaller screens */}
          <iframe
            title='Mobile Figma'
            className='w-screen h-screen '
            src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FyvBvqaYxd2Whqeag0xgprD%2FA%2526O-Wedding-Invite%3Fpage-id%3D0%253A1%26type%3Ddesign%26node-id%3D130-201%26viewport%3D-4113%252C119%252C0.59%26t%3DM2uzbODtyVnMgf0x-1%26scaling%3Dmin-zoom%26starting-point-node-id%3D130%253A201%26mode%3Ddesign%26hide-ui=1"
            allowfullscreen
          ></iframe>
          <script>
            const figmaLink = document.querySelector(".embed_documentation_footer--documentationFooter--cRlI0")
            
            console.log(figmaLink)

          </script>
        </div>
      ) : (
        <div className="w-full h-screen overflow-x-hidden snap-mandatory snap-y scroll-smooth bg-[#f2dddd]">
          {/* 1st page */}
          <div className="h-screen w-full flex flex-col justify-center items-center snap-start scroll-smooth">
            {/* <p className="md:text-9xl text-4xl text-[#1ca89b] font-[Lora] font-extrabold mb-12 italic">
              Aoife & Oisín
            </p>
            <p className="flex text-2xl text-[#1ca89b] font-[Lora] font-light">
              9 August 2024
            </p> */}
            <img src={AoifeOisin} alt="Aoife & Oisín" />
          </div>

          {/* 2nd page */}
          <div className="h-screen w-full flex flex-col justify-center items-center snap-start scroll-smooth">
            <img
              src={collage}
              alt="Collage of Aoife & Oisín"
              className="md:w-screen md:h-screen"
            />
          </div>

          {/* 3rd page */}
          <div className="h-screen w-full px-3 md:px-0 flex flex-col justify-center items-center snap-start scroll-smooth">
            {/* <p className="flex md:text-6xl text-3xl text-center text-[#1ca89b] font-[Lora] font-light mb-12">
              We're Getting Married!
            </p>
            <p className="text-center md:text-3xl text-md text-[#1ca89b] font-[Mulish] font-light mb-12">
              COME AND CELEBRATE WITH US
            </p> */}

            <img src={WereGettingMarried} alt="We're Getting Married" />

          </div>

          {/* 4th page */}
          <div className="h-screen w-full px-2 md:px-0 flex flex-col justify-center items-center text-center snap-start scroll-smooth">
            <div className="w-full flex flex-wrap flex-col items-center mb-20 text-[#1ca89b]">
              <p className="md:mb-6 mb-2">
                <span className="md:text-3xl text-lg text-[#1ca89b] font-[Mulish] font-light mr-2">
                  FROM
                </span>
                <span className="md:text-5xl text-2xl text-[#1ca89b] font-[Lora] font-light">
                  8.00pm
                </span>
              </p>
              <p className=" flex justify-center items-end">
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
                  RSVP BY 09 JUNE 2024
                </span>{' '}
                TO AOIFEOISINWEDDING@GMAIL.COM
              </p>{' '}
              <br />
              <p className="px-8 md:px-0">
                NO NEED FOR PRESENTS, YOUR PRESENCE IS GIFT ENOUGH
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactPage;
