import SpotlightCard from "../Element/SpotlightCard.jsx";
import AnimatedContent from "../Element/AnimatedContent.jsx";
import BlurText from "../Element/BlurText.jsx";
const handleAnimationComplete = () => {
  console.log("Animation completed!");
};
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

const keterangan = {
  todolist:
    "saya membuat project ini, untuk melatih fungsi append(), delete() di javascript, dan logic sederhana untuk mengedit list.",
  tingtung:
    "Tingtung Social adalah replika sosial media menggunakan PHP, Tailwind, dan Mysql untuk Database. Tingtung sederhananya menggunakan konsep CREATE, UPDATE, DELETE, SELECT ",
  otnweb:
    "Oh The Neputne adalah channel youtube saya, webiste ini di buat dengan HTML dan Bootstrap saja.",
};
const ProjekFragment = () => {
  return (
    <div>
      <BlurText
        text="Projek Ku "
        delay={150}
        animateBy="words"
        direction="top"
        onAnimationComplete={handleAnimationComplete}
        className="text-2xl lg:text-[35px] text-center justify-center  font-Poppins font-bold mb-2 lg:text-5xl "
      />
      <p className="text-center justify-center mb-10 lg:text-2xl">
        projek gabutszz yang aku buatt, selama belajar coding
      </p>
      <div className="flex flex-col lg:grid gap-3 lg:gap-6 lg:grid-cols-3">
        <Card
          judul="Todo List JS"
          gambar={`/portofolio25/image/simpletodolist.png`}
          text={keterangan.todolist}
          icon={`/portofolio25/image/htmlcss.png`}
          icon2={`/portofolio25/image/javascript.png`}
          icon3={`/portofolio25/image/tailwindcss.png`}
          linkGit="https://github.com/cokvrindaa/Simple-To-Do-List-Interface-Only-"
          linkWeb="https://cokvrindaa.github.io/Simple-To-Do-List-Interface-Only-/"
        ></Card>
        <Card
          judul="TingTung Social"
          gambar={`/portofolio25/image/tingtungss.png`}
          text={keterangan.tingtung}
          icon={`/portofolio25/image/htmlcss.png`}
          icon2={`/portofolio25/image/php.png`}
          icon3={`/portofolio25/image/tailwindcss.png`}
        ></Card>
        <Card
          judul="Oh The Neptune Web"
          gambar={`/portofolio25/image/ohtheneptune.png`}
          text={keterangan.otnweb}
          icon={`/portofolio25/image/htmlcss.png`}
        ></Card>
      </div>
    </div>
  );
};
const Card = (props) => {
  const { gambar, text, judul, icon, icon2, icon3, linkGit, linkWeb } = props;
  return (
    <AnimatedContent
      distance={100}
      direction="vertical"
      reverse={false}
      duration={1.2}
      ease="power3.out"
      initialOpacity={0.2}
      animateOpacity
      scale={1.0}
      threshold={0.2}
      delay={0.3}
    >
      <SpotlightCard
        className="custom-spotlight-card relative flex flex-col items-start justify-between h-full  mb-5 max-w-full lg:w-full p-4 max-h "
        spotlightColor="rgba(0, 229, 255, 0.2)"
      >
        <p className="text-white  text-justify text-xl mt-2 font-semibold mb-3 ">
          {judul}
        </p>
        <img src={gambar} alt="" />
        <p className="mt-3 text-justify">{text} </p>
        <div className="flex justify-between items-center w-full mt-2">
          <div className="gap-2 flex">
            {icon && <img src={icon} alt="" className="w-10 rounded-lg" />}
            {icon2 && <img src={icon2} alt="" className="w-10 rounded-lg" />}
            {icon3 && <img src={icon3} alt="" className="w-10 rounded-lg" />}
          </div>
          <div className="flex gap-2">
            <LinkProject link={linkGit} fontIcon={faGithub}></LinkProject>
            <LinkProject link={linkWeb} fontIcon={faGlobe}></LinkProject>
          </div>
        </div>
      </SpotlightCard>
    </AnimatedContent>
  );
};
const LinkProject = (props) => {
  const { link, fontIcon } = props;
  return (
    <a href={link}>
      <div className="bg-white  h-auto p-2 rounded-lg flex gap-2">
        <FontAwesomeIcon icon={fontIcon} className="text-2xl text-black" />
      </div>
    </a>
  );
};
export default ProjekFragment;
