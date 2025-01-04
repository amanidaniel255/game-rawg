import logo from "../assets/logo.webp"
const NavBar = () => {
  return (
    <nav className="bg-black text-white flex flex-row justify-between p-4">
        {/* logo  */}
        <div className="">
            <a href="#">
            <img src={logo} alt="logo" className="h-10 w-10" />
            </a>
        </div>
        {/* search bar */}
        {/* menu */}
        {/* toggle button */}

    </nav>
  )
}

export default NavBar