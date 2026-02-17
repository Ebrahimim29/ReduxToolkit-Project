import { useDispatch, useSelector } from "react-redux";
import ToggleBtn from "../../Components/ToggleBtn";
// import { setDarkMode, setTheme } from "../../Redux/Theme/darkModeSlice";
import { setTheme } from "../../Redux/Theme/darkModeSlice";

// const Navbar = ({darkMode, setDarkMode}) => {
const Navbar = () => {

    const {darkMode} = useSelector(state=>state.darkMode);
    const dispatch = useDispatch()

    return(
        <nav className="bg-white dark:bg-gray-500 h-navbar_height fixed top-0 left-0 w-full shadow-lg ">
            <div className="w-full h-full p-1">
                <div className="h-full flex items-center">
                    <ToggleBtn 
                        title={darkMode} 
                        checked={darkMode === "dark"} 
                        // onChange={e => setDarkMode(e.target.checked ? "dark" : "light")}
                        onChange={e=>dispatch(setTheme(e.target.checked ? "dark" : "light"))}
                    />
                </div>
            </div>
        </nav>
    )
};

export default Navbar;