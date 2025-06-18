import Lanyard from "../Element/Lanyard/Lanyard/Lanyard.jsx";
import SplitText from "../Element/SplitText.jsx";

const handleAnimationComplete = () => {
  console.log("All letters have animated!");
};

const MoreAboutFragment = () => {
  return (
    <div className="w-full flex flex-col md:flex-row items-center gap-4 px-4">
      <div className="w-full lg:w-[2000px] flex justify-center max-h-[600px] lg:max-h-full overflow-hidden">
        <Lanyard position={[0, 0, 15]} gravity={[0, -40, 0]} />
      </div>
      
      <SplitText
        text={`Perkenalkan lebih lanjut, nama lengkap saya Cokorda Vrindavan Chandra Dasa. Saya lahir di Bali, Indonesia. Pada portofolio ini dibuat saya masih SMP otw SMA/K. Saya pertama kali mencoba React JS. Sebelumnya saya juga menggunakan beberapa bahasa web.`}
        className="text-justify text-large md:text-lg font-Poppins lg:text-3xl"
        delay={100}
        duration={0.6}
        ease="power3.out"
        splitType="words" 
        from={{ opacity: 0, y: 40 }}
        to={{ opacity: 1, y: 0 }}
        threshold={0.1}
        rootMargin="-100px"
        onLetterAnimationComplete={handleAnimationComplete}
      />
    </div>
  );
};

export default MoreAboutFragment;
