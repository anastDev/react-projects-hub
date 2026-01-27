import {Button} from "@/components/ui/button.tsx";
import type { ProjectCardTypes} from "@/pages/Projects/types/typesProjectCard.tsx";
import {Link} from "react-router";

export const MiniProjectCards = ({projectName, description, path}: ProjectCardTypes) => {
    return (
        <div className="flex flex-row space-x-6">
            <div className="w-[18rem] h-[14rem] border border-gray-700 bg-gray-800 py-4 px-6 shadow-md rounded-lg">
                <div className="border my-2 blur-md">
                    Image of the project
                </div>
            </div>
            <div className="flex-1">
                <h4 className="mb-2 font-medium text-gray-100">{projectName}</h4>
                <div className="mb-6 text-gray-400">
                    {description}
                </div>
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
    )
}

export default MiniProjectCards;