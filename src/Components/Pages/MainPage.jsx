import MainAbout from "../Layout/MainAbout";
import ScrollVelocity from "../Element/ScrollVelocity.jsx";
import MoreAbout from "../Layout/MoreAbout.jsx";
import BahasaDigunakan from "../Layout/BahasaDigunakan.jsx";
import Projek from "../Layout/Projek.jsx";
import Kontak from "../Layout/Kontak.jsx";
const MainPage = () => {
  return (
    <div>
      <div id="beranda">
        <MainAbout />
      </div>

      <div id="tentang">
        <ScrollVelocity
          texts={[
            "Emangnya lo siapa?, nama lengkap koe siapa?",
            "skrol lagi ke bawah bos",
            "jangan lupa literasi ya, biar ga nanya lagi :v",
          ]}
          className="custom-scroll-text font-Poppins"
          velocity={40}
        />
        <MoreAbout />
      </div>

      <div id="skill">
        <BahasaDigunakan />
      </div>

      <div className="mt-15"></div>
      <ScrollVelocity
        texts={[
          "PROJECT LU MANAA BOSSS!!!",
          "JANGAN JANGAN LOCALHOST 😹",
          "XIXIXIXIXI",
        ]}
        className="custom-scroll-text font-Poppins"
        velocity={40}
      />

      <div id="projek" className="mb-15 lg:mb-80">
        <Projek />
      </div>

      <div id="kontak">
        <Kontak />
      </div>
    </div>
  );
};

export default MainPage;
