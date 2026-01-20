import {Button} from "@/components/ui/button.tsx";
import type { ProjectCardTypes} from "@/types/typesProjectCard.tsx";
import {Link} from "react-router";

export const MiniProjectCards = ({projectName, description, path}: ProjectCardTypes) => {
    return (
        <div className="flex flex-row space-x-6">
            <div className="w-[18rem] h-[14rem] border border-gray-100 py-4 px-6 shadow-md rounded-lg">
                <div className="border my-2">
                    Image of the project
                </div>
            </div>
            <div className="flex-1">
                <h4 className="mb-2 font-medium">{projectName}</h4>
                <div className="mb-6">
                    {description}
                </div>
                <div className="">
                    <Link to={path!}>
                        <Button variant="outline" >Go to project</Button>
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default MiniProjectCards;