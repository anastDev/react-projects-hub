import {FaBookOpen, FaFolder} from "react-icons/fa";
import {IoHome} from "react-icons/io5";

export const routes = [
    {
        title: "Home",
        path: "/projects/about-me",
        Icon: IoHome,
    },
    {
        title: "My Projects",
        path: "/projects/projects-page",
        Icon: FaFolder,
    },
    {
        title: "About Me",
        path: "",
        Icon: FaBookOpen,
    }
]