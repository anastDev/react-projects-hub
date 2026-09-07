import type {ReactNode} from "react";

export const SkillsBadge = ({
                                icon,
                                name,
                                primary = false,
                            }: {
    icon: ReactNode;
    name: string;
    primary?: boolean;
}) => (
    <div
        className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm backdrop-blur transition-colors duration-200 ${
            primary
                ? "bg-orange-400/10 border border-orange-300/40 text-orange-300 hover:border-orange-300"
                : "bg-gray-900/60 border border-white/10 text-gray-300 hover:border-orange-400/60 hover:text-gray-100"
        }`}
    >
        {icon}
        {name}
    </div>
);