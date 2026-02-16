const Navbar = () => {

    return(
        <nav className="bg-white dark:bg-gray-500 h-navbar_height fixed top-0 left-0 w-full shadow-lg ">
            <div className="w-full h-full p-1">
                <div className="h-full flex items-center">
                    <ToggleBtn></ToggleBtn>
                </div>
            </div>
        </nav>
    )
};

export default Navbar;