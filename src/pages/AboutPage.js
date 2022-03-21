// import RandomIcon from "../components/RandomIcon";

import Grid from '../components/Grid';

const AboutPage = () => {
  return (
    <div className="w-full flex flex-col items-center mx-auto">

      <div className="w-full h-screen flex justify-center bg-slate-900 z-10">
        <h1 className="w-2/3 mt-10 font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-left text-slate-100 bg-slate-900 z-10">
          Hi. <br />
          I'm Oisín. <br />
          This is my site.
        </h1>
      </div>

      <div className="w-full h-screen flex justify-center items-center bg-slate-100">

        <Grid />

        <div className="relative w-1/2 flex justify-center font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center z-10">
          <h3 className="w-2/3 min-w-max py-4 px-2">
            Hi. <br />
            I'm Oisín. <br />
            This is my site.
          </h3>
        </div>
      </div>

      <div className="w-full h-screen bg-slate-900 flex justify-center z-10">
        <div className="relative w-1/2 flex justify-center mt-10 font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center text-slate-800 bg-red-100 z-10">
          <h1 className="w-2/3 min-w-max bg-red-500">
            Hi. <br />
            I'm Oisín. <br />
            This is my site.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
