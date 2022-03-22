import react from '../assests/courseIcons/react.svg';
import docker from '../assests/courseIcons/docker.svg';
import git from '../assests/courseIcons/git.svg';
import Grid from '../components/Grid';
import CourseItem from '../components/CourseItem';

const AboutPage = () => {
  return (
    <div className="w-full flex flex-col items-center mx-auto">
      <div className="w-full h-screen flex justify-evenly items-center bg-slate-900 text-slate-100 pl-20">
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

      <div className="w-full h-screen flex justify-center items-center bg-slate-100 text-slate-900">
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

      <div className="w-full h-screen relative z-10 bg-slate-900 flex flex-col items-center">
        <div className="w-full h-full flex">
          <div className="w-1/2 flex flex-col items-center pt-20">
            <h3 className="font-bold text-5xl bg-slate-900 text-slate-100 mb-10">
              Brushing up on
            </h3>
            <div className="h-1/2  w-1/2 text-slate-100 text-2xl font-bold">
              <ul className="h-full flex flex-col justify-evenly p-4">
                <li>
                  <CourseItem
                    name={'Advanced Git'}
                    image={git}
                    finished={false}
                  />
                </li>
                <li>
                  <CourseItem name={'Docker'} image={docker} finished={true} />
                </li>

                <li>
                  <CourseItem
                    name={'React Router v6'}
                    image={react}
                    finished={true}
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
