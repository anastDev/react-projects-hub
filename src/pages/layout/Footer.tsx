import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <footer className="border-t border-black h-18 position fixed bottom-0 w-full">
                <div className="flex flex-col items-center mt-2 space-x-2">
                   <div className="flex flex-row space-x-2">
                       <div>Home</div>
                       <div>About Me</div>
                   </div>
                    <div className="flex flex-row gap-2 mt-2">
                       <div><FaLinkedin size="28px" /></div>
                        <div><FaGithub size="28px"/></div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;