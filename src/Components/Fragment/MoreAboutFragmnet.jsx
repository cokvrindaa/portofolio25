import Lanyard from "../Element/Lanyard/Lanyard/Lanyard.jsx";

const MoreAboutFragment = () => {
  return (
    <div className="w-full flex flex-col md:flex-row items-center gap-4 px-4">
      <div className="w-full lg:w-[2000px] flex justify-center max-h-[600px] lg:max-h-full overflow-hidden">
        <Lanyard position={[0, 0, 15]} gravity={[0, -40, 0]} />
      </div>
      <p className="  text-large md:text-lg font-Poppins text-justify lg:text-3xl  ">
        Perkenalkan lebih lanjut, nama lengkap saya <span className="font-bold">Cokorda Vrindavan Chandra Dasa</span>. Saya lahir di Bali, Indonesia. Pada portofolio ini di buat saya masih smp otw sma/k. Saya pertamakali mencoba react js. Seblumnya saya juga menggunakan beberapa bahasa web.
      </p>
    </div>
  );
};

export default MoreAboutFragment;
