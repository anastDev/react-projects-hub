import type {ProjectCardTypes} from "@/pages/projects/types/typesProjectCard.ts";
import {Button} from "@/components/ui/button.tsx"
import {Link} from "react-router";
import {ArrowRight, Code2} from "lucide-react";

const ProjectCard = ({projectName, img, path, tags}: ProjectCardTypes) => {
    return (
        <div className="group relative w-full h-auto min-h-[22rem] flex flex-col bg-gray-800 py-4 px-4 lg:px-6 shadow-md rounded-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-orange-400/20 overflow-hidden">

            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 via-transparent to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
            <div className="absolute inset-[1px] bg-gray-800 rounded-lg"></div>

            {/* Content */}
            <div className="relative z-10 flex flex-col h-full">
                {img && img !== "TBA" && (
                    <div className="relative w-full h-40 lg:h-56 my-2 overflow-hidden rounded-lg">
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <img
                            src={`${import.meta.env.BASE_URL}${img}`}
                            alt={`${projectName} preview`}
                            className="w-full h-full object-fit group-hover:scale-110 transition-all duration-500"
                        />
                    </div>
                )}

                {(!img || img === "TBA") && (
                    <div className="relative w-full h-40 lg:h-56 my-2 flex items-center justify-center bg-gradient-to-br from-gray-700/50 to-gray-800/50 rounded-lg border border-gray-700/50 group-hover:border-orange-400/30 transition-colors">
                        <Code2 className="w-12 h-12 lg:w-16 lg:h-16 text-orange-400/50 group-hover:text-orange-400/80 transition-colors" />
                    </div>
                )}

                <div className="flex flex-col mt-2 space-y-2 flex-1">
                    <h5 className="text-base lg:text-lg font-semibold text-gray-100 group-hover:text-orange-400 transition-colors">
                        {projectName}
                    </h5>
                </div>

                <div className="flex flex-wrap gap-1.5 lg:gap-2 my-3">
                    {tags?.slice(0, 3).map((tag) => (
                        <span
                            key={tag}
                            className="text-xs px-2.5 py-1 bg-gray-700/70 text-gray-300 rounded-full border border-gray-600/50 group-hover:border-orange-400/50 group-hover:bg-gray-700 transition-all"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                <div className="mt-auto pt-2">
                    <Link to={path!} className="block">
                        <Button
                            size="sm"
                            variant="outline"
                            className="w-full border-orange-500 text-orange-400 bg-gray-900/50 hover:bg-orange-500 hover:text-gray-900 transition-all duration-300 text-xs lg:text-sm font-medium group-hover:shadow-lg group-hover:shadow-orange-500/20 cursor-pointer"
                        >
                            View Project <span><ArrowRight/></span>
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;