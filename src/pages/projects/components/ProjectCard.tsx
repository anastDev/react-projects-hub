import type {ProjectCardTypes} from "@/pages/projects/types/typesProjectCard.tsx";
import {Button} from "@/components/ui/button.tsx"
import {Link} from "react-router";

const ProjectCard = ({projectName, description, img, path}: ProjectCardTypes) => {
    return (
        <>
            <div className="w-xs h-[26rem] flex flex-col  border border-gray-700 bg-gray-800 py-4 px-6 shadow-md rounded-lg">
                <div className="w-3xs h-[14rem] border my-2 blur-md">
                    <img src={img} alt="img of the project"/>
                </div>
                <div className="flex flex-col my-2 space-y-1">
                    <h5 className="font-medium text-gray-100">{projectName}</h5>
                    <p className="font-light text-gray-400">{description}</p>
                </div>
                <div>
                    <Link
                        to={path!}
                    >
                        <Button
                            size="sm"
                            variant="outline"
                            className="border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-gray-900 transition-colors"
                        >More
                        </Button>
                    </Link>
                </div>
            </div>
        </>
    )
}
export default ProjectCard;