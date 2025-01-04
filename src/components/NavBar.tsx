import logo from "../assets/logo.webp";
const NavBar = () => {
  return (
    <nav className="bg-black text-white flex flex-row justify-between items-center p-4">
      {/* logo  */}
      <div className="">
        <a href="#">
          <img src={logo} alt="logo" className="h-10 w-10" />
        </a>
      </div>
      {/* search bar */}
    <div>
      <input
        type="text"
        placeholder="search for games here"
        className="rounded-full px-8 py-2 bg-black placeholder:bg-black/50 placeholder:text-white/50   outline outline-1 outline-gray-400"
      />
    </div>
      {/* menu */}
      {/* toggle button */}
    </nav>
  );
};

export default NavBar;
