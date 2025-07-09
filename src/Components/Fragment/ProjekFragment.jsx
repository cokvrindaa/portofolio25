import SpotlightCard from "../Element/SpotlightCard.jsx";
import AnimatedContent from "../Element/AnimatedContent.jsx";
import BlurText from "../Element/BlurText.jsx";
const handleAnimationComplete = () => {
  console.log("Animation completed!");
};
const keterangan = {
  
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
        className="text-2xl lg:text-[35px]  font-Poppins font-bold mb-5"
      />
      <div className="flex flex-col lg:flex-row gap-3 lg:gap-6">
        <Card
          judul="lorem ipsum dolor"
          gambar={`/portofolio25/image/simpletodolist.png`}
          text="tesss aja kuyyy"
        ></Card>
        <Card
          judul="lorem ipsum dolor"
          gambar={`/portofolio25/image/tingtungss.png`}
          text="tesss aja kuyyy"
        ></Card>
        <Card
          judul="lorem ipsum dolor"
          gambar={`/portofolio25/image/ohtheneptune.png`}
          text="tesss aja kuyyy"
        ></Card>
      </div>
    </div>
  );
};
const Card = (props) => {
  const { gambar, text, judul } = props;
  return (
    <AnimatedContent
      distance={150}
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
      <SpotlightCard
        className="custom-spotlight-card relative flex flex-col items-start justify-between h-full  mb-5 max-w-full lg:max-w-100 p-4 max-h "
        spotlightColor="rgba(0, 229, 255, 0.2)"
      >
        <p className="text-white  text-justify text-lg mt-2 font-semibold mb-3">
          {judul}
        </p>
        <img src={gambar} alt="" />
        <p className="mt-3">{text} </p>
      </SpotlightCard>
    </AnimatedContent>
  );
};
export default ProjekFragment;
