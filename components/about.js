import Skill from "../components/skillset";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faLinkedin,
  faTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

export default function About() {
  return (
    <div
      id="about"
      className="overflow-hidden sm:overflow-scroll md:overflow-scroll flex flex-col bg-black bg-center h-screen w-full"
    >
      <section className="  w-full text-white relative">
        <p className="text-center pt-8 text-4xl">About Me</p>
<<<<<<< HEAD
        <div className=" flex justify-center w-full pt-32 sm:pt-12 sm:flex-col ">
=======
        <div className=" flex justify-center w-full pt-40 sm:pt-12 sm:flex-col ">
>>>>>>> b1862bdeb50076239fd73db203dfc25cb3529539
          <section className="w-2/5 sm:w-11/12 sm:my-0 sm:mx-auto">
            <h4 className="text-xl opacity-80 sm-text-center ">
              A self-taught Frontend developer, focused on writing clean,
              elegant and efficient code with an open mind to soak up as much
              knowledge and practice as I can in an attempt to perfect my craft.
              I am team oriented and get along with others when working in a
              group setting.I am passionate about building excellent software
              that improves the lives of those around me. I specialize in
              creating software for clients ranging from individuals and
              small-businesses all the way to large enterprise corporations.
            </h4>
          </section>
          <section className=" w-2/5 sm:w-11/12 sm:mx-auto sm:text-center sm:overflow-scroll md:overflow-scroll content-center items-center">
            <div className="">
              <h2 className="text-2xl font-bold text-center sm:text-left sm:pt-8">Skills</h2>
              <ul className="list-none my-4 ">
                <Skill
                  icon="fa-laptop-code"
                  name="Languages"
                  items="JavaScript"
                />
                <Skill
                  icon="fa-terminal"
                  name="Frameworks"
                  items=" ReactJS/Redux, VueJS/Vuex, NuxtJS"
                />
              </ul>
            </div>
          </section>
        </div>
        <section className="flex flex-col text-center pt-20  ">
          <div>
            <h5 className="text-4xl">Got an Idea ?</h5>
            <h6 className="text-3xl">or Want to get in touch</h6>
          </div>
          <div className="icons py-4">
            <a href="https://www.linkedin.com/in/idrisolaoye/" className="px-4">
              <FontAwesomeIcon icon={faLinkedin} size="lg" />
            </a>
            <a href="https://twitter.com/laoye_jnr" className="px-4">
              <FontAwesomeIcon icon={faTwitter} size="lg" />
            </a>
          </div>
        </section>
      </section>
    </div>
  );
}
