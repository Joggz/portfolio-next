import { React, useState } from "react";

export default function Nav() {
    const [addClose, setAddCLose] = useState(false)

    const toggle = () => {
        setAddCLose(!addClose)
    }
    let closeClass = ['menu-btn'];
    if(addClose){
        closeClass.push('close')
      }
    
  return (
    <nav className="fixed top-0 left-0 w-full h-20 font-mono text-white bg-blackish z-50">
      <div className="flex justify-between items-center max-w-7xl m-auto px-2 py-4 h-inherit">
        <p className="brand_logo py-2">
          <a href="./">laoye_jnr</a>
        </p>
        <div className="menu-btn top-8 z-50 h-4 w-7 cursor-pointer ease-in-out transition-all duration-500 ">
        </div>
        <ul className={``}>
              <li
                className={`nav-link m-8 border border-6 p-4 rounded-lg`
                }
              >
                <a
                  href='#about'
                  className='text-opacity-70 text-white hover:text-opacity-100'
                >
                  Contact Me
                </a>
              </li>
             
            </ul>
      </div>
    </nav>
  );
}
