const NavBar = () => {
  return (
    <div className="sticky top-4 rounded-[100px] z-50 w-[98%]  mx-auto  items-center backdrop-blur-sm px-8 py-8 shadow-sm flex justify-between  ">
      <Logo />
      <div className="flex gap-3 invisible lg:visible">
        <Content text="Lorem" />
        <Content text="Ipsum" />

      </div>
    </div>
  );
};
const Logo = () => {
  return <p className=" font-bold text-2xl  font-Poppins ">@cokvrinda'25</p>;
};
const Content = (props) => {
  const { text } = props;
  return (
    <a href="#" className=" hover:font-bold ">
      {text}
    </a>
  );
};
export default NavBar;
