import {motion} from "framer-motion";
import type { ProjectCardTypes} from "@/pages/projects/types/typesProjectCard.ts";
import {Link} from "react-router";
import {Code2, ExternalLink} from "lucide-react";
import {IoLogoGithub} from "react-icons/io";

export const MiniProjectCard = ({
                                    projectName,
                                    description,
                                    img,
                                    path,
                                    githubRepo,
                                    tags,
                                    status = "In Progress",
                                }: ProjectCardTypes) => {
    const hasLiveDemo = !!path && !path.startsWith("https://github.com");
    const hasGitHubRepo = !!githubRepo;

    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeInOut" } },
            }}
            className="group flex flex-col border border-white/10 bg-gray-900/50 backdrop-blur rounded-2xl overflow-hidden transition-all duration-300 hover:border-orange-300/40 hover:shadow-xl hover:shadow-orange-300/10"
        >
            {/* Image / fallback */}
            {img && img !== "" ? (
                <div className="w-full aspect-video overflow-hidden">
                    <img
                        src={`${import.meta.env.BASE_URL}${img}`}
                        alt={`${projectName} preview`}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                </div>
            ) : (
                <div className="w-full aspect-video flex items-center justify-center bg-gradient-to-br from-gray-800/60 via-gray-900/60 to-gray-900/60">
                    <Code2 className="w-12 h-12 text-orange-300/30 transition-colors group-hover:text-orange-300/50" />
                </div>
            )}

            {/* Content */}
            <div className="flex flex-col flex-1 p-5 sm:p-6">

                {/* Title + status */}
                <div className="flex items-start justify-between gap-3 mb-3">
                    <h4 className="font-semibold text-gray-100 text-lg leading-snug">{projectName}</h4>
                    <span className={`shrink-0 rounded-full border px-2.5 py-0.5 text-xs font-medium ${
                        status === "Completed"
                            ? "bg-green-500/15 text-green-400 border-green-500/40"
                            : "bg-white/5 text-gray-400 border-white/15"
                    }`}>
                        {status}
                    </span>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-400 leading-relaxed flex-1 mb-4">{description}</p>

                {/* Tags */}
                {tags && tags.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mb-5">
                        {tags.slice(0, 4).map((tag) => (
                            <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-gray-300">
                                {tag}
                            </span>
                        ))}
                    </div>
                )}

                {/* Action buttons */}
                <div className="flex gap-3 mt-auto">
                    {hasGitHubRepo && (
                        <a
                            href={githubRepo!}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-1 items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2.5 text-sm font-medium text-gray-300 transition-colors hover:border-orange-300 hover:text-orange-300"
                        >
                            <IoLogoGithub className="h-4 w-4" />
                            Code
                        </a>
                    )}
                    {hasLiveDemo && (
                        <Link
                            to={path!}
                            className="flex flex-1 items-center justify-center gap-2 rounded-full bg-orange-400 px-4 py-2.5 text-sm font-medium text-gray-900 transition-colors hover:bg-orange-300"
                        >
                            <ExternalLink className="h-4 w-4" />
                            Live Demo
                        </Link>
                    )}
                </div>
            </div>
        </motion.div>
    );
};