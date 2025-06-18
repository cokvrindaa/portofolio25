import SpotlightCard from "../Element/SpotlightCard.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5, faJs, faPhp } from "@fortawesome/free-brands-svg-icons";
import AnimatedContent from "../Element/AnimatedContent.jsx";
import DecryptedText from "../Element/DecryptedText.jsx";
const keterangan = {
  javascript:
    "beberapa perojek aku menggunakan Javascript, terutama bagian frontend.",
  php: "beberapa perojek aku menggunakan PHP, terutama bagian backend",
  arduino:
    "beberapa perojek aku menggunakan arduino, ini pengabungan ilmu web dan elektronika dasar",
  html: "tentunya, saat tampilan web, aku menggunakn HTML5, CSS, kadang Tailiwind kadang Bootstrap",
};
const BahasaDigunakanFragment = () => {
  return (
    <div className="flex flex-col gap-6 lg:flex-row">
      <DecryptedText
        text="Bahasa Pemrograman"
        animateOn="view"
        revealDirection="center"
        
        className="font-Poppins text-2xl mx-auto text-center font-bold"
      />

      <Card text={keterangan.javascript} icon={faJs}></Card>
      <Card text={keterangan.php} icon={faPhp}></Card>
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
        <SpotlightCard
          className="custom-spotlight-card relative flex flex-col items-start justify-between h-73 "
          spotlightColor="rgba(0, 229, 255, 0.2)"
        >
          <img src={`/portofolio25/image/arduino.png`} className="w-40 mb-4" />
          <span className="text-white  text-justify text-lg mt-2">
            {keterangan.arduino}
          </span>
        </SpotlightCard>
      </AnimatedContent>

      <Card text={keterangan.html} icon={faHtml5}></Card>
    </div>
  );
};
const Card = (props) => {
  const { text, icon } = props;
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
      <SpotlightCard
        className="custom-spotlight-card relative flex flex-col items-start justify-between h-74 "
        spotlightColor="rgba(0, 229, 255, 0.2)"
      >
        <FontAwesomeIcon icon={icon} className="text-9xl" />
        <span className="text-white  text-justify text-lg mt-2">{text}</span>
      </SpotlightCard>
    </AnimatedContent>
  );
};
export default BahasaDigunakanFragment;
