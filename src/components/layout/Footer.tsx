import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <footer className="bg-white border-t shadow-sm w-full h-18 fixed bottom-0">
                <div className="flex flex-col items-center mt-2 space-x-2">
                   <div className="flex flex-row space-x-2">
                       <div>Home</div>
                       <div>About Me</div>
                   </div>
                    <div className="flex flex-row gap-2 mt-2">
                       <div>
                           {/* Add href to the <a> tag*/}
                           <a href="">
                               <FaLinkedin size="28px" />
                           </a>
                       </div>
                        <div><FaGithub size="28px"/></div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;