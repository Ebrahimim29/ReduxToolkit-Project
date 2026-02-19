import { useState } from "react";
import Content from "./Content/Content";
import Navbar from "./Navbar/Navbar";
import Sidebar from "./Sidebar/Sidebar";

// const Layout = ({darkMode, setDarkMode}) => {
const Layout = () => {

    const [page, setPage] = useState("posts");

    return(
        <div>
            <Content page={page}/>
            <Sidebar setPage={setPage}/>
            {/* <Navbar darkMode={darkMode} setDarkMode={setDarkMode}/> */}
            <Navbar/>
        </div>
    )
};

export default Layout;