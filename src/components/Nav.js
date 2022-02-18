import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div className="w-full h-full pt-6 lg:pt-8 font-semibold text-slate-300">
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
