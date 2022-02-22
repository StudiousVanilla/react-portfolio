import RandomIcon from "./RandomIcon";


const AboutPage = () => {

  return (
    <div className="w-full flex justify-center mx-auto pt-24">
      <h1 className="w-1/2 text-slate-900 font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center dark:text-white">
        Rapidly build modern websites without ever leaving your HTML.
      </h1>
      <div className="w-8 h-8">
        <RandomIcon/>
      </div>
    </div>
  );
};

export default AboutPage;
