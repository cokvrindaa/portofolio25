const NavBar = () => {
  return (
    <div className="sticky top-0 z-50 w-full backdrop-blur-sm p-8 shadow-sm flex justify-between">
      <Logo />
      <div className="flex gap-3">
        <Content text="Lorem" />
        <Content text="Ipsum" />
        <Content text="Dolor" />
        <Content text="Sit" />
      </div>
    </div>
  );
};
const Logo = () => {
  return <p className=" font-semibold ">Tes</p>;
};
const Content = (props) => {
  const { text } = props;
  return (
    <a href="#" className=" font-semibold">
      {text}
    </a>
  );
};
export default NavBar;
