import GradientText from "../Element/GradientText.Jsx";
import BlurText from "../Element/BlurText";
import AnimatedContent from "../Element/AnimatedContent.jsx";
import GlareHover from "../Element/GlareHover.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faGithub,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";

const handleAnimationComplete = () => {
  console.log("Animation completed!");
};
const MainAboutFragment = () => {
  return (
    <div>
      <Gambar></Gambar>
      <Text></Text>
      <div className="gap-3 flex items-center justify-center mt-5">
        <Button link="https://www.instagram.com/cokvrindaaa/">
          <FontAwesomeIcon icon={faInstagram} />
        </Button>
        <Button link="https://github.com/cokvrindaa">
          <FontAwesomeIcon icon={faGithub} />
        </Button>
        <Button link="https://www.tiktok.com/@cokvrindaa">
          <FontAwesomeIcon icon={faTiktok} />
        </Button>
      </div>
    </div>
  );
};
const Gambar = () => {
  return (
    <AnimatedContent
      distance={40}
      direction="vertical"
      reverse={true}
      duration={1.2}
      ease="power3.out"
      initialOpacity={0.2}
      animateOpacity
      scale={1.1}
      threshold={0.2}
      delay={0.3}
    >
      <img
        src="./src/image/profilsatu.jpg" 
        className=" rounded-full w-64 justify-center items-center mb-5 m-auto"
      ></img>
    </AnimatedContent>
  );
};

const Button = (props) => {
  const { children , link} = props;
  return (
    <AnimatedContent
      distance={40}
      direction="vertical"
      reverse={true}
      duration={1.2}
      ease="power3.out"
      initialOpacity={0.2}
      animateOpacity
      scale={1.1}
      threshold={0.2}
      delay={0.3}
    >
      <button>
        <a href={link}>
          <GlareHover
            glareColor="#ffffff"
            glareOpacity={0.3}
            glareAngle={-30}
            glareSize={300}
            transitionDuration={800}
            playOnce={false}
          >
            <h2
              style={{
                fontSize: "20px",
                fontWeight: "900",
                color: "white",
                margin: 0,
                marginTop: "-2px",
              }}
            >
              {children}
            </h2>
          </GlareHover>
        </a>
      </button>
    </AnimatedContent>
  );
};

const Text = () => {
  return (
    <div className="flex items-center justify-center text-center flex-col ">
      <BlurText
        text="Haloo 👋, nama ku "
        delay={150}
        animateBy="words"
        direction="top"
        onAnimationComplete={handleAnimationComplete}
        className="text-[20px] "
      />

      <AnimatedContent
        distance={40}
        direction="vertical"
        reverse={true}
        duration={1.2}
        ease="power3.out"
        initialOpacity={0.2}
        animateOpacity
        scale={1.1}
        threshold={0.2}
        delay={0.3}
      >
        <GradientText
          colors={["#FFFF, #4079ff, #FFFF, #4079ff, #FFFF"]}
          animationSpeed={8}
          showBorder={false}
          className=" text-[60px] font-bold"
        >
          Cok Vrinda
        </GradientText>
      </AnimatedContent>

      <BlurText
        text="lorem ipsum dolor sit amet, consectetur adipiscing elit."
        delay={150}
        animateBy="words"
        direction="top"
        onAnimationComplete={handleAnimationComplete}
        className="text-[20px] text-center justify-center"
      />
    </div>
  );
};

export default MainAboutFragment;
