import SpotlightCard from "../Element/SpotlightCard.jsx";

import AnimatedContent from "../Element/AnimatedContent.jsx";
import DecryptedText from "../Element/DecryptedText.jsx";

const BahasaDigunakanFragment = () => {
  return (
    <div>
      <DecryptedText
        text="Perkakas Pemrograman"
        animateOn="view"
        revealDirection="center"
        className="font-Poppins text-2xl lg:text-4xl mx-auto text-center font-bold "
      />{" "}
      <p className="mt-[-5px] mb-4 text-sm lg:text-2xl lg:mb-5">
        Berikut bahasa pemrograman, libary, framework, markup, dan tools yang
        aku sering pakai, untuk developing..
      </p>
      <div className="flex flex-col gap-6 lg:grid lg:grid-cols-4 ">
        <Card
          text="Javascript"
          gambar={`/portofolio25/image/javascript.png`}
          textisi="Bahasa Pemrograman"
        ></Card>
        <Card
          text="PHP"
          gambar={`/portofolio25/image/php.png`}
          textisi="Bahasa Pemrograman"
        ></Card>

        <Card
          text="Tailwind"
          textisi="CSS framework"
          gambar={`/portofolio25/image/tailwindcss.png`}
        ></Card>

        <Card
          text="HTML & CSS"
          textisi="Bahasa Markup Styling"
          gambar={`/portofolio25/image/htmlcss.png`}
        ></Card>
        <Card
          text="Arduino C"
          textisi="Bahasa Pemrograman"
          gambar={`/portofolio25/image/arduin.png`}
        ></Card>
        <Card
          text="ESP 32 & 8266"
          textisi="Microcontroler"
          gambar={`/portofolio25/image/esp32.png`}
        ></Card>
        <Card
          text="Github"
          textisi="Repository"
          gambar={`/portofolio25/image/github.png`}
        ></Card>
      </div>
    </div>
  );
};
const Card = (props) => {
  const { text, gambar, textisi } = props;
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
        className="custom-spotlight-card relative flex items-start gap-4 h-full p-6"
        spotlightColor="rgba(0, 229, 255, 0.2)"
      >
        <img src={gambar} className="w-16 rounded-lg" />
        <div className="flex flex-col mt-1.5">
          <span className="text-white text-justify text-xl font-semibold">
            {text}
          </span>
          <p>{textisi}</p>
        </div>
      </SpotlightCard>
    </AnimatedContent>
  );
};
export default BahasaDigunakanFragment;
