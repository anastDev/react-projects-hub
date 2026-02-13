import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import {Link} from "react-router";
import {staticRoutes} from "@/components/layout/header/staticRoutes.ts";
import {useAuth} from "@/hooks/useAuth.ts";
import {IoPerson} from "react-icons/io5";

const Footer = () => {
    const {isAuthenticated, userId} = useAuth();

    const routes = [
        ...staticRoutes,
        ...(isAuthenticated ? [{
            title: "Profile",
            path: `/profile/${userId}`,
            Icon: IoPerson
        }] : [])
    ];

    return (
        <footer className="bg-gray-900 border-t border-gray-800 text-gray-100 w-full mt-auto">
            <div className="container mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">

                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-orange-400">Navigation</h3>
                        <ul className="space-y-2">
                            {routes.map((route) => (
                                <li key={route.title}>
                                    <Link
                                        to={route.path}
                                        className="text-gray-400 hover:text-orange-400 transition-colors"
                                    >
                                        {route.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-orange-400">Connect</h3>
                        <div className="flex gap-4">
                            <a
                                href="https://www.linkedin.com/in/anastasia-mourouzidou/"
                                className="text-gray-400 hover:text-orange-400 transition-colors"
                                aria-label="LinkedIn"
                            >
                                <FaLinkedin size={28} />
                            </a>
                            <a
                                href="https://github.com/anastDev"
                                className="text-gray-400 hover:text-orange-400 transition-colors"
                                aria-label="GitHub"
                            >
                                <FaGithub size={28} />
                            </a>
                        </div>
                    </div>


                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-orange-400">About</h3>
                        <p className="text-gray-400 text-sm">
                            Full-stack developer specializing in React & TypeScript.
                            Building projects and learning along the way.
                        </p>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-6 text-center text-gray-500 text-sm">
                    <p>© {new Date().getFullYear()} Anastasia Mourouzidou. Built with React & TypeScript.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;