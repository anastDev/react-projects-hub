import {FaBookOpen, FaFolder} from "react-icons/fa";
import {IoHome} from "react-icons/io5";


export const staticRoutes= [
    {
        title: "Home",
        path: "/",
        Icon: IoHome,
    },
    {
        title: "My projects",
        path: "/projects",
        Icon: FaFolder,
    },
    {
        title: "about Me",
        path: "/about-me",
        Icon: FaBookOpen,
    },
]