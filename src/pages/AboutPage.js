import react from '../assests/courseIcons/react.svg';
import docker from '../assests/courseIcons/docker.svg';
import git from '../assests/courseIcons/git.svg';
import svelte from '../assests/courseIcons/svelte.svg';
import Grid from '../components/Grid';
import CourseItem from '../components/CourseItem';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import github from '../assests/icons/github.svg';
import LinkedIn from '../assests/icons/LinkedIn.svg';

const AboutPage = () => {
  return (
    <div className="w-full h-screen mx-auto overflow-x-hidden snap-mandatory snap-y scroll-smooth  text-3xl sm:text-4xl lg:text-5xl">
      {/* Screen 1 */}
      <div className="relative w-full h-screen flex flex-col-reverse justify-center items-center sm:flex-row sm:justify-evenly sm:items-center bg-slate-100 text-slate-900 snap-start scroll-smooth sm:min-w-[1000px] z-20">
        <Grid />

        <h1 className="w-3/5 sm:w-1/3 mb-10 sm:mb-0 font-extrabold tracking-tight text- flex justify-center text-slate-900 z-10">
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
            <div className="w-4 h-4 bg-transparent absolute z-10 drop-container">
              <div className="toggle-buttons">
                <div className="toggle-btn"></div>
                <div className="drop"></div>
              </div>

              <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                <defs>
                  <filter id="goo">
                    <feGaussianBlur
                      in="SourceGraphic"
                      stdDeviation="15"
                      result="blur"
                    />
                    <feColorMatrix
                      in="blur"
                      mode="matrix"
                      values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
                      result="goo"
                    />
                    <feBlend in="SourceGraphic" in2="goo" />
                  </filter>
                </defs>
              </svg>
            </div>
          </h3>

          <div className="bg-transparent flex pl-[260px] sm:pl-[413px] absolute wave-container">
            <div className="wave"></div>
          </div>
          <div className="bg-transparent flex pl-[260px] sm:pl-[413px] absolute wave-container2">
            <div className="wave2"></div>
          </div>
          <div className="bg-transparent flex pl-[260px] sm:pl-[413px] absolute splash-container">
            <div className="splash bg-pink-500 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Screen 3 */}
      <div className="relative w-full h-screen flex flex-col justify-center items-center bg-slate-100 text-slate-900 snap-start scroll-smooth sm:min-w-[1000px] sm:min-h-[750px] z-30">
        <div className="w-full h-1/2 sm:h-1/2 flex flex-col items-center justify-center sm:-mb-40 z-30">
          <h2 className="font-bold pl-2 h-fit mb-6 sm:m-8 sm:text-3xl text-2xl">
            I'm brushing up on...
          </h2>

          <div className="w-full sm:w-2/5 flex flex-col flex-wrap justify-center sm:flex-row sm:justify-center">
            <div className="sm:h-fit sm:w-fit w-full flex flex-row flex-wrap sm:flex-nowrap justify-center">
              <CourseItem
                link={
                  'https://www.youtube.com/playlist?list=PL4cUxeGkcC9hlbrVO_2QFVqVPhlZmz7tO'
                }
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

        <div className="hidden h-3/5 sm:h-4/5 w-full sm:flex flex-wrap items-center justify-center relative -mt-32 pl-2">
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

            <div id="cactus-container" className="group">
              <div class="cactus-plant group-hover:animate-hinge">
                <div class="cactus-needle"></div>
                <div class="cactus-needle"></div>
                <div class="cactus-needle"></div>
                <div class="cactus-needle"></div>
                <div class="cactus-needle"></div>
                <div class="cactus-needle"></div>
                <div class="cactus-needle"></div>
                <div class="cactus-needle"></div>
                <div class="cactus-needle"></div>
                <div class="cactus-needle"></div>
                <div class="cactus-needle"></div>
                <div class="cactus-needle"></div>
              </div>
              <div class="cactus-pot-top"></div>
              <div class="cactus-pot">
                <div id="eye"></div>
                <div id="eye"></div>
                <div id="maoth"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Screen 4 */}
      <div className="relative w-full h-screen flex flex-col justify-center items-center bg-slate-900 text-slate-100 snap-start scroll-smooth sm:min-w-[1000px]">
        {/* floating icons */}
        <div className="area">
          <ul className="circles">
            <li className="icon-squares">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-20 w-20 opacity-50"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </li>
            <li className="icon-squares">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 opacity-50"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </li>
            <li className="icon-squares">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 opacity-50"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
            </li>
            <li className="icon-squares">
              <span className="opacity-50">@</span>
            </li>
            <li className="icon-squares">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 opacity-50"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                />
              </svg>
            </li>
            <li className="icon-squares">
              <img
                src={LinkedIn}
                alt="LinkedIn"
                className="w-20 h-20 opacity-50"
              />
            </li>
            <li className="icon-squares">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16 opacity-50"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </li>
            <li className="icon-squares">
              <div className="w-16 h-16">
                <img src={github} alt="github" className="opacity-50" />
              </div>
            </li>
            <li className="icon-squares">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16 opacity-50"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
            </li>
            <li className="icon-squares">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 opacity-50"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                />
              </svg>
            </li>
          </ul>
        </div>

        <Link to="/contact" className="w-full h-full absolute">
          <div className="h-1/2 w-full absolute flex justify-center items-center top-0 contact-container">
            <button class="btn btn-2 hover-slide-down px-2 py-1 rotate-6 group">
              <span className="text-6xl font-semibold relative z-10">
                Contact
              </span>
            </button>
          </div>
        </Link>

        <div className="h-1/2 w-full relative flex justify-center items-center">
          <Link to="/projects" className="h-full w-full bg-slate-100">
            <div className="h-full w-full relative flex justify-center items-center projects-container">
              <button class="btn hover-border-1 px-5 py-4 -rotate-6 opacity-100">
                <span className="text-6xl text-slate-900 font-medium ">
                  My Projects
                </span>
              </button>
            </div>
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AboutPage;
