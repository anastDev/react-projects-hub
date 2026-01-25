import {FaBookOpen, FaFolder} from "react-icons/fa";
import {IoHome, IoPerson} from "react-icons/io5";

export const routes = [
    {
        title: "Home",
        path: "/",
        Icon: IoHome,
    },
    {
        title: "My Projects",
        path: "/projects/",
        Icon: FaFolder,
    },
    {
        title: "About Me",
        path: "/about-me",
        Icon: FaBookOpen,
    },
    {
        title: "Profile",
        path:"/auth/register",
        Icon: IoPerson
    }
]