// import RandomIcon from "../components/RandomIcon";

import Grid from "../components/Grid";


const AboutPage = () => {

  


  return (
    <div className="w-full flex flex-col items-center mx-auto pt-24">
      {/* <div className="w-full h-screen flex justify-center">
        <h1 className="w-2/3 mt-10 font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-left text-slate-100">
          Hi. <br />
          I'm Oisín. <br />
          This is my site.
        </h1>
      </div> */}

      <div className="w-full h-screen flex justify-center items-center bg-slate-100">
        
        <Grid/>

        <h1 className="w-1/2 mt-10 font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center text-slate-800 bg-red-50">
          Hi. <br />
          I'm Oisín. <br />
          This is my site.
        </h1>
      </div>

      <div className="w-full h-screen flex justify-center"></div>
    </div>
  );
};

export default AboutPage;
