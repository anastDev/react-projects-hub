import type {ProjectCardTypes} from "@/pages/Projects/types/typesProjectCard.tsx";
import {Button} from "@/components/ui/button.tsx"
import {Link} from "react-router";

const ProjectCard = ({projectName, description, img, path}: ProjectCardTypes) => {
    return (
        <>
            <div className="w-xs h-[26rem] flex flex-col border border-gray-100 py-4 px-6 shadow-md rounded-lg">
                <div className="w-3xs h-[14rem] border my-2">
                    <img src={img} alt="img of the project"/>
                </div>
                <div className="flex flex-col my-2 space-y-1">
                    <h5 className="font-medium">{projectName}</h5>
                    <p className="font-light">{description}</p>
                </div>
                <div className="">
                    <Link
                        to={path!}
                    >
                        <Button size="sm" variant="outline">More</Button>
                    </Link>
                </div>
            </div>
        </>
    )
}
export default ProjectCard;