import React, { useState } from 'react';

export default function NavBar() {
    const [navBar, setnavBar] = useState(false);
    const handleNav = () => { 
        setnavBar(!navBar);
    };

    return (
        
    <div className=" w-screen h-screen flex items-center justify-center p-7">
      <div className= "w-full h-full border border-white">
      </div>
    </div>
    
    )

}


