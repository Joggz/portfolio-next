import Typed from "react-typed";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faLinkedin,
  faTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

export default function Header() {
  const strings = [
    "",
    "Software Developer",
    "Front End Engineer",
    "Music Lover",
  ];

  return (
    <div
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y29kaW5nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80)",
      }}
      className="text-white bg-gray-700 bg-no-repeat bg-center bg-cover h-screen "
    >
      {/* <Parallax >
          
      </Parallax> */}
        {/* absolute inset-0 bg-black opacity-50 h-full flex flex-col */}
        <div className="flex">
          <div className="flex flex-col justify-center items-center bg-secondary h-screen sm:justify-center ">
            <h1 className="lg-text text-6xl px-10 sm:text-4xl sm:font-bold sm:text-center  sm:uppercase ">
              OLAOYE
              <span className="sec-text px-6">IDRIS</span>
            </h1>
            <Typed
              strings={strings}
              typeSpeed={50}
              startDelay={2000}
              loop={true}
              backDelay={900}
              backSpeed={30}
              className="text-2xl  py-4 sm:text-black  sm:font-bold sm:text-center "
            ></Typed>

            <div className="icons">
              <a href="#" className="px-4 sm:text-black">
                <FontAwesomeIcon icon={faFacebookSquare} size="lg" />
              </a>
              <a href="https://github.com/Joggz" className='px-4 sm:text-black'>
                <FontAwesomeIcon  icon={faGithub} size='lg'/>
              </a>
              <a
                href="https://www.linkedin.com/in/idrisolaoye/"
                className="px-4"
              >
                <FontAwesomeIcon icon={faLinkedin} size="lg sm:text-black" />
              </a>
              <a href="https://twitter.com/laoye_jnr" className="px-4 sm:text-black">
                <FontAwesomeIcon icon={faTwitter} size="lg" />
              </a>
            </div>
          </div>
        </div>
      
    </div>
  );
}
