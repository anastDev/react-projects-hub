import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import {Link} from "react-router";
import {staticRoutes} from "@/components/layout/Header/staticRoutes.ts";
import {useAuth} from "@/hooks/useAuth.ts";
import {IoPerson} from "react-icons/io5";

const Footer = () => {
    const {isAuthenticated, userId} = useAuth();

    const routes = [
        ...staticRoutes,
        ...(isAuthenticated ? [{
            title: "Profile",
            path: `/profile/:${userId}`,
            Icon: IoPerson
        }] : [])
    ];

    return (
        <>
            <footer className=" bg-gray-900  border-t-2 border-gray-800 text-gray-100 w-full h-22 fixed bottom-0">
                <div className="flex flex-col mt-3">
                   <div className="flex flex-row justify-center space-x-10">
                       {routes.map((route) => {
                           const {title, path} = route;
                           return (
                               <div className="hover:underline hover:text-orange-400 px-2">
                                   <Link to={path}>{title}</Link>
                               </div>
                           )
                       })}
                   </div>
                    <div className="flex flex-row justify-center gap-4 mt-2">
                       <div className="hover:text-orange-400">
                           <a href="https://www.linkedin.com/in/anastasia-mourouzidou/">
                               <FaLinkedin size="28px" />
                           </a>
                       </div>
                        <div className="hover:text-orange-400">
                            <a href="https://github.com/anastDev">
                                <FaGithub size="28px"/>
                            </a>
                        </div>
                        <div className="w-[10px]"></div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;