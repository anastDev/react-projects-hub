import {ArrowRight, ExternalLink} from "lucide-react";
import {Link} from "react-router";
import {IoLogoGithub} from "react-icons/io";

interface ProjectLinksProps {
    demo?: string;
    github?: string;
}

export const ProjectLinks = ({ demo, github }: ProjectLinksProps) => {
    if (!demo && !github) return null;

    const demoClass =
        "inline-flex items-center gap-1.5 rounded-full bg-orange-400 px-4 py-2 text-sm font-medium " +
        "text-gray-900 transition-colors hover:bg-orange-300";

    return (
        <div className="mt-5 flex flex-wrap gap-3">
            {demo &&
                (demo.startsWith("http") ? (
                    <a href={demo} target="_blank" rel="noopener noreferrer" className={demoClass}>
                        Live demo <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                ) : (
                    <Link to={demo} className={demoClass}>
                        Live demo <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                ))}

            {github && (
                <a
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm font-medium text-gray-200 transition-colors hover:border-orange-300 hover:text-orange-300"
                >
                    <IoLogoGithub className="h-3.5 w-3.5" />
                    Code
                </a>
            )}
        </div>
    );
};

export default ProjectLinks;