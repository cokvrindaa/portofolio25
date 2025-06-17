import MainAbout from "../Layout/MainAbout";
import ScrollVelocity from "../Element/ScrollVelocity.jsx";
import MoreAbout from "../Layout/MoreAbout.jsx";
const MainPage = () => {
  return (
    <div>
      <MainAbout></MainAbout>
      <ScrollVelocity
        texts={["Emangnya lo siapa?, nama lengkap koe siapa?", "skol lagi ke bawah bos", "jangan lupa literasi ya, biar ga nanya lagi :v"]}
        className="custom-scroll-text  font-Poppins"
          velocity={40} 

      />
      <MoreAbout></MoreAbout>
    </div>
  );
};

export default MainPage;
