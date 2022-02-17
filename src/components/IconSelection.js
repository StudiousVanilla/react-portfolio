import LineBox from './LineBox';
import XmasLogo from '../assests/projectIcons/XmasLogo.svg';
import DrinkMXR from '../assests/projectIcons/DrinkMXRLogo.svg';
import TSBLogo from '../assests/projectIcons/TSBLogo.svg';

const resetIcons = () => {
  // rest all icons opacity
  const icons = document.getElementsByClassName('icon');
  for (let index = 0; index < icons.length; index++) {
    icons[index].classList.add('opacity-30');
  }
};

const resetProjects = () => {
  // grab all projects and hide them
  const projects = document.getElementsByClassName('project');
  for (let index = 0; index < projects.length; index++) {
    projects[index].classList.add('hidden');
  }
};

const resetBoxes = (id) => {
  const borderBox = document.getElementById(`${id}Border`);
  borderBox.classList.remove('translate-x-[850px]');
  const bowserBox = document.getElementById(`${id}Browser`);
  bowserBox.classList.remove('-translate-x-[850px]');
};

const showProject = (id) => {
  // toggle chosen project
  const project = document.getElementById(id);
  project.classList.toggle('hidden');
};

const slideBoxes = (id) => {

  setTimeout(() => {
    const borderBox = document.getElementById(`${id}Border`);
    borderBox.classList.add('translate-x-[850px]');
    const bowserBox = document.getElementById(`${id}Browser`);
    bowserBox.classList.add('-translate-x-[850px]');
  }, 0);

};

const handleClick = (e, id) => {
  resetIcons();
  resetProjects();
  resetBoxes(id);

  // make icon unclickable again
  e.currentTarget.classList.toggle('opacity-30');

  showProject(id);
  slideBoxes(id);
  document.getElementById(id).scrollIntoView({behavior: 'smooth'});
};

const IconSelection = () => {
  return (
    <div className="w-full h-screen max-h-[900px] min-h-[400px] bg-slate-900 flex justify-evenly items-center text-slate-900 ">
      <div
        className="w-48 h-48 max-h-60 max-w-60 opacity-30 hover:opacity-100 hover:cursor-pointer group icon"
        onClick={(e) => handleClick(e, 'XMAS')}
      >
        <LineBox logo={XmasLogo} logoAltText="Xmas Logo" />
        <p className="w-full mt-2 pl-2 pr-2 flex justify-center items-center text-lg rounded-md group-hover:text-slate-100">
          Xmas Time-Machine
        </p>
      </div>

      <div
        className="w-48 h-48 max-h-60 max-w-60 opacity-30 hover:opacity-100 hover:cursor-pointer group icon"
        onClick={(e) => handleClick(e, 'DrinkMXR')}
      >
        <LineBox logo={DrinkMXR} logoAltText="DrinkMXR Logo" />
        <p className="w-full mt-2 pl-2 pr-2 flex justify-center items-center text-lg rounded-md group-hover:text-slate-100">
          Drink MXR
        </p>
      </div>

      <div
        className="w-48 h-48 max-h-60 max-w-60 opacity-30 hover:opacity-100 hover:cursor-pointer group icon"
        onClick={(e) => handleClick(e, 'TSB')}
      >
        <LineBox logo={TSBLogo} logoAltText="TSB Logo" />
        <p className="w-full mt-2 pl-2 pr-2 flex justify-center items-center text-lg rounded-md group-hover:text-slate-100">
          The Sounding Board
        </p>
      </div>
    </div>
  );
};

export default IconSelection;