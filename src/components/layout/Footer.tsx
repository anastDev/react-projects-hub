import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import {Link} from "react-router";
import {routes} from "@/components/layout/Header/routes.ts";

const Footer = () => {
    return (
        <>
            <footer className="bg-white border-t shadow-sm w-full h-20 fixed bottom-0">
                <div className="flex flex-col mt-3">
                   <div className="flex flex-row justify-center space-x-10">
                       {routes.map((route) => {
                           return (
                               <div className="hover:underline px-2">
                                   <Link to={route.path}>{route.title}</Link>
                               </div>
                           )
                       })}
                   </div>
                    <div className="flex flex-row justify-center gap-4 mt-2">
                       <div>
                           {/* Add href to the <a> tag*/}
                           <a href="">
                               <FaLinkedin size="28px" />
                           </a>
                       </div>
                        <div>
                            <a href="">
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