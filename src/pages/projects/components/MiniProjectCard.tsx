import {Button} from "@/components/ui/button.tsx";
import type { ProjectCardTypes} from "@/pages/projects/types/typesProjectCard.ts";
import {Link} from "react-router";
import {Code2} from "lucide-react";

export const MiniProjectCard = ({projectName, description, img, path, status="In Progress"}: ProjectCardTypes) => {
    return (
        <div className="flex flex-col space-x-6 lg:h-full border border-gray-700 bg-gray-800 py-8 px-6 shadow-md rounded-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-orange-400/20 hover:border-orange-400">
            {img && img !== "TBA" && (
                <div className="w-full aspect-video overflow-hidden rounded-lg">
                    <img
                        src={`${import.meta.env.BASE_URL}${img}`}
                        alt={`${projectName} preview`}
                        className="w-full h-full object-cover transition-all duration-500"
                    />
                </div>
            )}

            {(!img || img === "TBA") && (
                <div className="w-full aspect-video flex items-center justify-center bg-gray-700/50 rounded-lg">
                    <Code2 className="w-16 h-16 text-orange-400/50" />
                </div>
            )}
            <div className="flex-1 flex flex-col">
                <div className="flex-1">
                    <h4 className="mt-4 mb-2 font-medium text-gray-100 lg:text-lg">{projectName}</h4>
                    <div className="mb-4 text-gray-400 text-sm lg:h-1/3  hover:border-orange-400/50 transition-colors">
                        {description}
                    </div>
                </div>

                <div className="flex justify-between items-end mt-auto">
                    <div className="text-xs text-center p-2 bg-gray-700 text-gray-300 rounded border border-gray-600 hover:border-orange-400/50 transition-colors">{status}</div>
                    <div>
                        <Link to={path!}>
                            <Button
                                variant="outline"
                                className="border-2 border-orange-500 text-orange-400 bg-gray-800 hover:bg-orange-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 focus:ring-offset-gray-900 transition-colors duration-200"
                            >Go to project
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MiniProjectCard;