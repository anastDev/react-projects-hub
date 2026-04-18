import { Button } from "@/components/ui/button";
import type {Status} from "@/projects/dev-tools/types/typesStatus.ts";
import {Loader2} from "lucide-react";

interface ActionButtonProps {
    label: string;
    onClick: () => void;
    status: Status;
    accent: "indigo" | "cyan";
}

const ActionButton = ({ label, onClick, status, accent }: ActionButtonProps)=>  {
    const isLoading = status === "loading";

    const accentClasses =
        accent === "indigo"
            ? "bg-indigo-600 hover:bg-indigo-500"
            : "bg-cyan-600 hover:bg-cyan-500";

    return (
        <Button
            type="button"
            onClick={onClick}
            disabled={isLoading}
            className={`w-full text-white ${accentClasses}`}
        >
            {isLoading ? (
                <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Generating…
                </>
            ) : (
                label
            )}
        </Button>
    );
}

export default ActionButton;