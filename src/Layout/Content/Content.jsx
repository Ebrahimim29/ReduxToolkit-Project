import Comments from "../../Pages/Comments";
import Gallery from "../../Pages/Gallery";
import Posts from "../../Pages/Posts";
import Users from "../../Pages/Users";

const Content = ({page})=>{

    return(
        <section className="bg-blue-100 dark:bg-green-400 w-full h-screen overflow-auto pr-sidebar_width pt-navbar_height">
            <div className="w-full p-4">
                {
                page === "users" ? (
                    <Users/>
                ) : page === "posts" ? (
                    <Posts/>
                ) : page === "comments" ? (
                    <Comments/>
                ) : <Gallery/>}
            </div>
        </section>
    )
}

export default Content;