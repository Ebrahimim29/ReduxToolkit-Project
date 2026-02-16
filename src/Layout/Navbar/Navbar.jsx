import ToggleBtn from "../../Components/ToggleBtn";

const Navbar = ({darkMode, setDarkMode}) => {

    return(
        <nav className="bg-white dark:bg-gray-500 h-navbar_height fixed top-0 left-0 w-full shadow-lg ">
            <div className="w-full h-full p-1">
                <div className="h-full flex items-center">
                    <ToggleBtn 
                        title={darkMode} 
                        checked={darkMode === "dark"} 
                        onChange={e => setDarkMode(e.target.checked ? "dark" : "light")}
                    />
                </div>
            </div>
        </nav>
    )
};

export default Navbar;