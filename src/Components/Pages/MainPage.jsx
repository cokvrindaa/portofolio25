import MainAbout from "../Layout/MainAbout";
import ScrollVelocity from "../Element/ScrollVelocity.jsx";
const MainPage = () => {
  return (
    <div>
      <MainAbout></MainAbout>
      <ScrollVelocity
        texts={["Emangnya lo siapa?, nama lengkap koe siapa?", "skol lagi ke bawah bos", "jangan lupa literasi ya, biar ga nanya lagi :v"]}
        className="custom-scroll-text"
          velocity={40} 

      />
      <MainAbout></MainAbout>
    </div>
  );
};

export default MainPage;
