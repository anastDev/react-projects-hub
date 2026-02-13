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
        title: "About",
        path: "/about",
        Icon: FaBookOpen,
    },
]