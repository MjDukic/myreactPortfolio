import { useState } from 'react';
// import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const NavBar = () => {
    const [navbar, setNavbar] = useState(false);

    const handleNav = () => { 
        setNavbar(!navbar);
    };
//navbar, reference tailwind
  return (
    <div className="w-screen h-screen flex justify-center text-black font-black tracking-wide text-xl">
        
      <ul className="md:flex hidden">

        <a onClick={handleNav} href="#about">
          <li className="m-2 p-7 cursor-pointer hover:scale-110">ABOUT</li>
        </a>
        <a onClick={handleNav} href="#projects">
          <li className="m-2 p-7 cursor-pointer hover:scale-110">PROJECTS</li>
        </a>
        <a onClick={handleNav} href="#contact">
          <li className="m-2 p-7 cursor-pointer hover:scale-110">CONTACT</li>
        </a>

      </ul>

    </div>
  );

};

export default NavBar;




