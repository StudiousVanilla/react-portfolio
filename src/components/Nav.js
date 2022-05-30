import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div className="w-full mb-2 py-6 lg:pt-8 font-semibold text-slate-500 z-10 absolute">
      <div className="flex justify-end">
        <ul className="w-1/4 min-w-[400px] flex justify-evenly">
          <li className="hover:text-sky-400 cursor-pointer">
            <Link to='/about'>About</Link>
          </li>
          <li className="hover:text-sky-400 cursor-pointer">
            <Link to='/projects'>Projects</Link>
          </li>
          <li className="hover:text-sky-400 cursor-pointer">
            <Link to='/contact'>Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
