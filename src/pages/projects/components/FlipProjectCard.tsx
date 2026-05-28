import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";
import {Code2, ExternalLink} from "lucide-react";
import {IoLogoGithub} from "react-icons/io";
import type {ProjectCardTypes} from "@/pages/projects/types/typesProjectCard.ts";


const FlipProjectCard = ({
                             projectName,
                             description,
                             tags,
                             path,
                             githubRepo,
                             img,
                             isFeatured = false,
                             gridArea,
                         }: ProjectCardTypes) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const hasLiveDemo = !!path && !path.startsWith("https://github.com");
    const hasGitHubRepo = !!githubRepo;

    return (

        <div
            className={`group relative cursor-pointer ${gridArea || ""}`}
            style={{ perspective: "1000px" }}
            onClick={() => setIsFlipped(!isFlipped)}
        >
            {/* Flip container */}
            <motion.div
                className="relative h-full w-full"
                style={{ transformStyle: "preserve-3d" }}
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
            >

                <div
                    className="absolute h-full w-full overflow-hidden rounded-2xl border border-gray-700 hover:border-orange-400/40 "
                    style={{ backfaceVisibility: "hidden", top: 0, left: 0 }}
                >
                    {/* Background img */}
                    {img && (
                        <div className="relative h-full w-full">
                            <img
                                src={img}
                                alt={`${projectName} preview`}
                                className="absolute inset-0 h-full w-full object-center transition-transform duration-500 group-hover:scale-105"
                            />
                            {/* Gradient overlay for text readability */}
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/95 via-gray-900/60 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-100" />
                        </div>
                    )}

                    {(!img || img === "" || img === "TBA") && (
                        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-800 via-gray-850 to-gray-900">
                            <Code2 className="h-16 w-16 text-orange-400/30 transition-colors group-hover:text-orange-400/50 lg:h-20 lg:w-20" />
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/95 via-gray-900/60 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-80" />
                        </div>
                    )}

                    {/* Status badge */}
                    <div className="absolute left-5 top-5 flex gap-2 sm:left-6 sm:top-6 lg:left-8 lg:top-8">
                        {isFeatured && (
                            <span className="rounded-full border border-orange-500/40 bg-orange-500/20 px-3 py-1 text-xs font-medium text-orange-400 backdrop-blur-sm sm:text-sm">
                Featured
              </span>
                        )}
                    </div>

                    {/* Content */}
                    <div className="absolute inset-x-1.5 bottom-2 flex flex-col justify-end p-5 sm:p-6 lg:p-8 ">

                        <div className="relative">
                            <h3
                                className={`mb-4 font-semibold text-gray-200 pr-24 ${
                                    isFeatured ? "text-2xl lg:text-3xl xl:text-4xl" : "text-xl"
                                }`}
                                style={{ fontFamily: "'DM Serif Display', serif" }}
                            >
                                {projectName}
                            </h3>

                            {hasLiveDemo && (
                                <Link
                                    to={path!}
                                    onClick={(e) => e.stopPropagation()}
                                    className="absolute right-0 top-0 flex items-center gap-2 rounded-lg border border-orange-500 bg-orange-500/10 px-3 py-2 text-xs font-medium text-orange-400 backdrop-blur-sm transition-colors hover:bg-orange-500 hover:text-gray-900"
                                >
                                    <ExternalLink className="h-4 w-4" />
                                    Demo
                                </Link>
                            )}
                        </div>

                        {/* Show description on featured cards */}
                        {isFeatured && (
                            <p className="mb-4 max-w-3xl text-sm leading-relaxed text-gray-300 sm:text-base lg:text-lg">
                                {description}
                            </p>
                        )}

                        {/* Front: Action buttons and tags row */}
                        <div className="flex flex-wrap items-center gap-3">

                            {isFeatured && hasGitHubRepo && (
                                <a   href={githubRepo}
                                     target="_blank"
                                     onClick={(e) => e.stopPropagation()}
                                     className="flex items-center gap-2 rounded-lg border border-gray-700 bg-gray-800/80 px-3 py-1.5 text-xs font-medium text-gray-300 backdrop-blur-sm transition-colors hover:border-orange-400 hover:text-orange-400 sm:text-sm"
                                >
                                    <IoLogoGithub className="h-4 w-4" />
                                    {isFeatured ? "View Code" : "Code"}
                                </a>
                            )}

                            {/* Divider on featured cards */}
                            {isFeatured && (hasGitHubRepo || hasLiveDemo) && (
                                <div className="hidden h-6 w-px bg-gray-700 sm:block" />
                            )}

                            {/* Tech tags */}
                            {isFeatured && (
                                <div className="flex flex-wrap gap-2">
                                    {tags!.slice(0, isFeatured ? 4 : 3).map((tag) => (
                                        <span
                                            key={tag}
                                            className="rounded-md border border-gray-700 bg-gray-800 px-2.5 py-1  text-gray-300 sm:text-sm text-base"
                                        >
                    {tag}
                  </span>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Description and CTA */}
                <div
                    className="absolute h-full w-full overflow-hidden rounded-2xl border border-gray-700 bg-gray-800"
                    style={{
                        backfaceVisibility: "hidden",
                        transform: "rotateY(180deg)",
                        top: 0,
                        left: 0,
                    }}
                >
                    <div className="flex h-full flex-col justify-between overflow-y-auto p-5 sm:p-6 lg:p-8">
                        <div>
                            {/* Title with status badge */}
                            <div className="mb-3 flex items-center gap-2">
                                <h3
                                    className={`font-semibold text-gray-100 ${
                                        isFeatured
                                            ? "text-2xl sm:text-3xl lg:text-4xl"
                                            : "text-lg sm:text-xl"
                                    }`}
                                    style={{ fontFamily: "'DM Serif Display', serif" }}
                                >
                                    {projectName}
                                </h3>
                            </div>

                            {/* Full description */}
                            <p
                                className={`mb-6 leading-relaxed text-gray-300 ${
                                    isFeatured ? "text-sm sm:text-base lg:text-lg" : "text-sm"
                                }`}
                            >
                                {description}
                            </p>

                            {/* Tech stack list */}
                            <div className="mb-4">
                                <p className="mb-3 text-xs font-medium text-gray-400">
                                    Tech Stack
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {tags!.map((tag) => (
                                        <span
                                            key={tag}
                                            className="rounded-md bg-gray-700/50 px-2.5 py-1 text-xs text-gray-300"
                                        >
                      {tag}
                    </span>
                                    ))}
                                </div>
                            </div>

                            {/* Back: Action buttons */}
                            <div className="mt-4 flex gap-3 sticky bottom-0 bg-gray-800 pt-4 -mx-5 px-5 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">

                                {/* GitHub button */}
                                {hasGitHubRepo && (
                                    <a
                                        href={githubRepo}
                                        target="_blank"
                                        onClick={(e) => e.stopPropagation()}
                                        className="flex flex-1 items-center justify-center gap-2 rounded-lg border-2 border-gray-700 bg-gray-900 px-4 py-3 text-sm font-semibold text-gray-300 transition-colors hover:border-orange-400 hover:text-orange-400"
                                    >
                                        <IoLogoGithub className="h-4 w-4" />
                                        Code
                                    </a>
                                )}

                                {/* Live Demo button */}
                                {hasLiveDemo && (
                                    <Link
                                        to={path}
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            if (!hasLiveDemo && hasGitHubRepo) {
                                                window.open(path, "_blank");
                                                e.preventDefault();
                                            }
                                        }}
                                        className="flex flex-1 items-center justify-center gap-2 rounded-lg border-2 border-orange-500 bg-gray-800 px-4 py-2.5 text-sm font-semibold text-orange-400 transition-colors hover:bg-orange-500 hover:text-gray-900"
                                    >
                                        <ExternalLink className="h-4 w-4" />
                                        View Demo
                                    </Link>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default FlipProjectCard;
