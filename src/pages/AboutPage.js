import react from '../assests/courseIcons/react.svg';
import docker from '../assests/courseIcons/docker.svg';
import git from '../assests/courseIcons/git.svg';
import svelte from '../assests/courseIcons/svelte.svg';
import Grid from '../components/Grid';
import CourseItem from '../components/CourseItem';
import Footer from '../components/Footer';


const AboutPage = () => {

  return (
    <div className="w-full h-screen mx-auto overflow-x-hidden snap-mandatory snap-y scroll-smooth  text-3xl sm:text-4xl lg:text-5xl">

      {/* Screen 1 */}
      <div className="relative w-full h-screen flex flex-col-reverse justify-evenly items-center sm:flex-row sm:justify-evenly sm:items-center bg-slate-100 text-slate-900 snap-start scroll-smooth sm:min-w-[1000px] z-20">
        <Grid />

        <h1 className="w-3/5 sm:w-1/3 font-extrabold tracking-tight text- flex justify-center text-slate-900 z-10">
          Hi. <br />
          I'm Oisín. <br />
          This is my site.
        </h1>

      </div>


      {/* Screen 2 */}
      <div className="relative w-full h-screen flex justify-evenly items-center bg-slate-900 text-slate-100 pl-0 sm:pl-20 snap-start scroll-smooth md:min-w-[1000px] text-4xl sm:text-6xl z-20">
        <div className="relative w-full sm:w-2/3 flex flex-col items-center font-extrabold tracking-tight text-center z-10">
          <h3 className="w-3/4 min-w-max px-3 mb-6 relative">
            I'm a self-taught
          </h3>
          <h3 className="before:animate-wiggle before:block before:absolute before:-inset-2 before:skew-y-3 before:bg-pink-500 relative inline-block pb-1 realtive z-20 before:rounded-br-md before:rounded-tl-md">
            <span className="relative text-white">Web Developer</span>
            {/* Drip */}
            <div className='w-4 h-4 bg-transparent absolute z-10 drop-container'>
              <div className="toggle-buttons">
                <div className="toggle-btn"></div>
                <div className="drop"></div>
              </div>

              <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                <defs>
                  <filter id="goo">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="15" result="blur" />
                    <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
                    <feBlend in="SourceGraphic" in2="goo" />
                  </filter>
                </defs>
              </svg>
            </div>
          </h3>

          <div className='bg-transparent flex pl-[260px] sm:pl-[413px] absolute wave-container'>
            <div className="wave"></div>
          </div>
          <div className='bg-transparent flex pl-[260px] sm:pl-[413px] absolute wave-container2'>
            <div className="wave2"></div>
          </div>
          <div className='bg-transparent flex pl-[260px] sm:pl-[413px] absolute splash-container'>
            <div className="splash bg-pink-500 rounded-full"></div>
          </div>

        </div>
      </div>


      {/* Screen 3 */}
      <div className="relative w-full h-screen flex flex-col justify-center items-center bg-slate-100 text-slate-900 snap-start scroll-smooth sm:min-w-[1000px] sm:min-h-[750px] z-30">

        <div className="w-full h-1/2 sm:h-1/2 flex flex-col items-center justify-evenly">
          <h2 className="font-bold pl-2 mb-6 sm:m-0 sm:text-3xl text-2xl">I'm brushing up on...</h2>

          <div className="w-full sm:w-2/5 flex flex-col flex-wrap justify-center sm:flex-row sm:justify-center">
            <div className="sm:h-fit sm:w-fit w-full flex flex-row flex-wrap sm:flex-nowrap justify-center">
              <CourseItem
                link={'https://www.youtube.com/playlist?list=PL4cUxeGkcC9hlbrVO_2QFVqVPhlZmz7tO'}
                name={'Svelte'}
                image={svelte}
                finished={false}
              />
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

        <div className="hidden h-1/2 w-full sm:flex flex-wrap items-center justify-center relative -mt-32 pl-2">
          <div class="shelf rounded-md">
            <div class="clock">
              <div class="knot"></div>
              <div class="hand hour-hand"></div>
              <div class="hand min-hand"></div>
              <div class="hand second-hand"></div>
              <div class="clock-foot-left"></div>
              <div class="clock-foot-right"></div>
            </div>
            <div class="book-1 animate-lilBounce"></div>
            <div class="book-2 animate-lilBounce"></div>
            <div class="book-3 animate-lilBounce"></div>
            <div class="cactus group">
              <div class="pot">
                <div class="pot-top"></div>
                <div class="pot-bottom"></div>
              </div>
              <div class="plant-left  group-hover:animate-hinge"></div>
              <div class="plant-right"></div>
            </div>
          </div>
        </div>










      </div>

      {/* Screen 4 */}
      <div className="relative w-full h-screen flex flex-col justify-center items-center bg-slate-900 text-slate-100 snap-start scroll-smooth sm:min-w-[1000px]">





      </div>


      <Footer />
    </div>
  );
};

export default AboutPage;
