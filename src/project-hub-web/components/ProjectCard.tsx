import type {ProjectCardTypes} from "@/types/typesProjectCard.tsx";
import {Button} from "@/components/ui/button"

const ProjectCard = ({projectName, description, img}: ProjectCardTypes) => {
    return (
        <>
            <div className="w-xs flex flex-col border border-gray-100 py-4 px-6 shadow-md rounded-lg">
                <div className="w-3xs border my-2">
                    <img src={img} alt="img of the project"/>
                </div>
                <div className="flex flex-col my-2 space-y-1">
                    <h5 className="font-medium">{projectName}</h5>
                    <p className="font-light">{description}</p>
                </div>
                <div className="">
                   <Button size="sm" variant="outline">More</Button>
                </div>
            </div>
        </>
    )
}
export default ProjectCard;