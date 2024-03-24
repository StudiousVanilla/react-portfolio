import { Link, useLocation } from 'react-router-dom';

const Nav = () => {

  const location = useLocation();

  // Check if the current pathname is "/wedding"
  const hideNav = location.pathname === '/wedding';

  // Return null if hideNav is true, effectively hiding the Nav component
  if (hideNav) {
    return null;
  }

  return (
    <div className="w-full mb-2 py-6 lg:pt-8 font-semibold text-slate-500 z-40 absolute">
      <div className="flex justify-end">
        <ul className="w-1/4 min-w-full sm:min-w-[400px] flex justify-evenly">
          <li className="hover:text-sky-400 cursor-pointer">
            <Link to='/wedding'>Wedding</Link>
          </li>
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
