import { useState } from 'react';
// import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const NavBar = () => {
    const [navbar, setNavbar] = useState(false);

    const handleNav = () => { 
        setNavbar(!navbar);
    };
//navbar, reference tailwind
//try to not hard code the spacing between nav and aboutme, figure that out
  return (
    <div className="w-screen flex justify-center font-bolder text-black tracking-wide text-xl">
        
      <ul className="md:flex pt-3.5 pb-5">

        <a onClick={handleNav} href="#about">
          <li className="p-7 cursor-pointer hover:scale-110">ABOUT</li>
        </a>
        <a onClick={handleNav} href="#projects">
          <li className="p-7 cursor-pointer hover:scale-110">PROJECTS</li>
        </a>
        <a onClick={handleNav} href="#contact">
          <li className="p-7 cursor-pointer hover:scale-110">CONTACT</li>
        </a>

      </ul>

    </div>
  );

};

export default NavBar;




