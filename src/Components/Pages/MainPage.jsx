import MainAbout from "../Layout/MainAbout";
import ScrollVelocity from "../Element/ScrollVelocity.jsx";
import MoreAbout from "../Layout/MoreAbout.jsx";
import BahasaDigunakan from "../Layout/BahasaDigunakan.jsx";
import Projek from "../Layout/Projek.jsx";
const MainPage = () => {
  return (
    <div>
      <MainAbout></MainAbout>
      <ScrollVelocity
        texts={[
          "Emangnya lo siapa?, nama lengkap koe siapa?",
          "skrol lagi ke bawah bos",
          "jangan lupa literasi ya, biar ga nanya lagi :v",
        ]}
        className="custom-scroll-text  font-Poppins"
        velocity={40}
      />
      <MoreAbout></MoreAbout>
      <BahasaDigunakan></BahasaDigunakan>
      <div className="mt-15"></div>
      <ScrollVelocity
        texts={[
          "PROJECT LU MANAA BOSSS!!!",
          "JANGAN JANGAN LOCALHOST 😹",
          "XIXIXIXIXI",
        ]}
        className="custom-scroll-text  font-Poppins "
        velocity={40}
      />
      <div className="mb-15 lg:mb-80"></div>

      <Projek></Projek>
    </div>
  );
};

export default MainPage;
