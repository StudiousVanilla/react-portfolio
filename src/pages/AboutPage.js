import react from '../assests/courseIcons/react.svg';
import docker from '../assests/courseIcons/docker.svg';
import git from '../assests/courseIcons/git.svg';
import Grid from '../components/Grid';
import CourseItem from '../components/CourseItem';

const AboutPage = () => {
  return (
    <div className="w-full h-screen mx-auto overflow-x-hidden snap-mandatory snap-y scroll-smooth">
      <div className="w-full h-screen flex justify-evenly items-center bg-slate-900 text-slate-100 pl-20 snap-start scroll-smooth">
        <h1 className="w-1/3 font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-left bg-slate-900 z-10">
          Hi. <br />
          I'm Oisín. <br />
          This is my site.
        </h1>

        <div className="bg-green-200 w-96 h-96 relative group">
          <div
            className="bg-red-200 w-full h-full absolute
             "
          />
        </div>
      </div>

      <div className="w-full h-screen flex justify-center items-center bg-slate-100 text-slate-900 snap-start scroll-smooth">
        <Grid />

        <div className="relative w-1/2 flex flex-col items-center font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center group transition ease-in-out delay-150">
          <h3 className="w-2/3 min-w-max px-3 mb-6 relative">
            I'm a self-taught
          </h3>
          <h3 className="before:block before:absolute before:-inset-2 before:-skew-y-3 before:bg-pink-500 relative inline-block">
            <span className="relative text-white">Web Developer</span>
          </h3>
        </div>
      </div>

      <div className="w-full h-screen min-h-[800px] relative bg-slate-900 flex flex-col justify-center snap-start scroll-smooth">
        <div className="bg-slate-900 w-full h-3/5 flex items-center justify-center">
          <h2 className="text-slate-100 text-6xl font-bold pl-20">
            I'm always <br /> learning new things
          </h2>

          <div className="h-3/4 w-2/5 flex justify-center">
            <div className="h-fit w-fit mt-10 grid grid-cols-2 gap-1 sm:gap-2">
              <div />
              <CourseItem
                link={'https://www.youtube.com/watch?v=31ieHmcTUOk&list=PL4cUxeGkcC9hxjeEtdHFNYMtCpjNBm3h7'}
                name={'Docker'}
                image={docker}
                finished={true}
              />
              <CourseItem
                link={'https://fireship.io/courses/git/'}
                name={'Advanced Git'}
                image={git}
                finished={false}
              />
              <CourseItem
                link={'https://www.youtube.com/watch?v=WfpmvgVZD1A&list=PL4cUxeGkcC9h7F1LWaQ7MAI8ptg5VjvxJ'}
                name={'Router v6'}
                image={react}
                finished={true}
              />
            </div>
          </div>
        </div>

        <div className="bg-slate-100 w-full h-2/5 flex items-center justify-canter">
          <div className="bg-green-200 h-full w-1/2"></div>
          <h2 className="text-slate-900 text-6xl font-bold px-20">
            And working <br /> on new projects
          </h2>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
