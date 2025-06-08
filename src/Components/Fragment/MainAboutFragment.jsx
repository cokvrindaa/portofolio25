import GradientText from "../Element/GradientText.Jsx";
import BlurText from "../Element/BlurText";
import AnimatedContent from "../Element/AnimatedContent.jsx";
const handleAnimationComplete = () => {
  console.log("Animation completed!");
};
const MainAboutFragment = () => {
  return (
    <div>
      <Gambar></Gambar>
      <Text></Text>
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

const Text = () => {
  return (
    <div className="flex items-center justify-center text-center flex-col ">
      <BlurText
        text="Haloo 👋, nama ku "
        delay={150}
        animateBy="words"
        direction="top"
        onAnimationComplete={handleAnimationComplete}
        className="text-[25px]"
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
        text="masih belum teralu jago ngoding :v"
        delay={150}
        animateBy="words"
        direction="top"
        onAnimationComplete={handleAnimationComplete}
        className="text-[25px] text-center justify-center"
      />
    </div>
  );
};

export default MainAboutFragment;
