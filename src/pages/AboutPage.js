import react from '../assests/courseIcons/react.svg';
import docker from '../assests/courseIcons/docker.svg';
import git from '../assests/courseIcons/git.svg';
import Grid from '../components/Grid';
import CourseItem from '../components/CourseItem';
import Footer from '../components/Footer';

const AboutPage = () => {
  return (
    <div className="w-full h-screen mx-auto overflow-x-hidden snap-mandatory snap-y scroll-smooth  text-3xl sm:text-4xl lg:text-5xl">
      <div className="w-full h-screen flex justify-evenly items-center sm:bg-slate-900  text-slate-100 pl-20 snap-start scroll-smooth md:min-w-[1000px]">
        <h1 className="w-1/3 font-extrabold tracking-tight text-left bg-slate-900 z-10">
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

      <div className="w-full h-screen flex justify-center items-center sm:bg-slate-100 bg-green-100 text-slate-900 snap-start scroll-smooth sm:min-w-[1000px]">
        <Grid />

        <div className="relative w-1/2 flex flex-col items-center font-extrabold tracking-tight text-center group transition ease-in-out delay-150">
          <h3 className="w-2/3 min-w-max px-3 mb-6 relative">
            I'm a self-taught
          </h3>
          <h3 className="before:block before:absolute before:-inset-2 before:-skew-y-3 before:bg-pink-500 relative inline-block">
            <span className="relative text-white">Web Developer</span>
          </h3>
        </div>
      </div>

      <div className="w-full h-screen md:min-h-[600px] relative bg-slate-900 flex flex-col justify-center snap-start scroll-smooth sm:min-w-[1000px]">
        <div className="bg-slate-900 w-full h-1/2 flex items-center justify-evenly">
          <h2 className="text-slate-100 font-bold pl-2">Brushing up on...</h2>

          <div className="w-2/5 flex justify-center">
            <div className="h-fit w-fit flex">
              <div />
              <CourseItem
                link={'https://fireship.io/courses/git/'}
                name={'Advanced Git'}
                image={git}
                finished={false}
              />
              <CourseItem
                link={
                  'https://www.youtube.com/watch?v=31ieHmcTUOk&list=PL4cUxeGkcC9hxjeEtdHFNYMtCpjNBm3h7'
                }
                name={'Docker'}
                image={docker}
                finished={true}
              />
              <CourseItem
                link={
                  'https://www.youtube.com/watch?v=WfpmvgVZD1A&list=PL4cUxeGkcC9h7F1LWaQ7MAI8ptg5VjvxJ'
                }
                name={'Router v6'}
                image={react}
                finished={true}
              />
            </div>
          </div>
        </div>

        <div className="bg-slate-100 h-1/2 w-full flex flex-wrap items-center justify-center relative">
          <p className='absolute font-bold text-slate-900 left-10 -rotate-12'>Current project</p>
          <div className=" h-full w-full max-h-[320px] max-w-[320px] rounded-full bg-red-200 flex justify-center items-center group">1</div>
          <div className=" h-full w-full max-h-[320px] max-w-[320px] rounded-full bg-green-200 flex justify-center items-center absolute group-hover:animate-swing origin-bottom-left">2</div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
