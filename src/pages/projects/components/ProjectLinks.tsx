import {ExternalLink} from "lucide-react";
import {FaGithub} from "react-icons/fa";

export const ProjectLinks = ({ liveUrl, githubRepo }: { liveUrl?: string; githubRepo?: string }) => {
    if (!liveUrl && !githubRepo) return null;

    return (
        <div className="mt-5 flex flex-wrap gap-3">
            {liveUrl && (
                <a
                    href={liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full bg-orange-400 px-4 py-2 text-sm font-medium text-gray-900 transition-colors hover:bg-orange-300"
                >
                    Live demo
                    <ExternalLink className="h-3.5 w-3.5" />
                </a>
            )}
            {githubRepo && (
                <a
                    href={githubRepo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm font-medium text-gray-200 transition-colors hover:border-orange-300 hover:text-orange-300"
                >
                    <FaGithub className="h-3.5 w-3.5" />
                    Code
                </a>
            )}
        </div>
    );
};

export default ProjectLinks;