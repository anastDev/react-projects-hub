import type {ProjectCardTypes} from "@/pages/projects/types/typesProjectCard.tsx";
import {Button} from "@/components/ui/button.tsx"
import {Link} from "react-router";
import {Code2} from "lucide-react";

const ProjectCard = ({projectName, description, img, path, tags}: ProjectCardTypes) => {
    return (
        <div className="group w-xs h-[26rem] flex flex-col border border-gray-700 bg-gray-800 py-4 px-6 shadow-md rounded-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-orange-400/20 hover:border-orange-400">

            {img && img !== "TBA" && (
                <div className="w-3xs h-[14rem] my-2 overflow-hidden rounded-lg">
                    <img
                        src={img}
                        alt={`${projectName} preview`}
                        className="w-full h-full object-cover blur-md group-hover:blur-none group-hover:scale-105 transition-all duration-500"
                    />
                </div>
            )}

            {(!img || img === "TBA") && (
                <div className="w-3xs h-[14rem] my-2 flex items-center justify-center bg-gray-700/50 rounded-lg">
                    <Code2 className="w-16 h-16 text-orange-400/50" />
                </div>
            )}

            <div className="flex flex-col mt-1 space-y-1">
                <h5 className="font-medium text-gray-100 group-hover:text-orange-400 transition-colors">
                    {projectName}
                </h5>
                <p className="text-sm text-gray-500 mb-1">{description}</p>
            </div>

            <div className="flex flex-wrap gap-2 my-2">
                {tags?.map((tag) => (
                    <span
                        key={tag}
                        className="text-xs px-2 py-1 bg-gray-700 text-gray-300 rounded border border-gray-600 hover:border-orange-400/50 transition-colors"
                    >
                        {tag}
                    </span>
                ))}
            </div>

            <div className="mt-2 flex justify-end">
                <Link to={path!}>
                    <Button
                        size="sm"
                        variant="outline"
                        className="border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-gray-900 transition-colors cursor-pointer"
                    >
                        More
                    </Button>
                </Link>
            </div>
        </div>
    )
}
export default ProjectCard;