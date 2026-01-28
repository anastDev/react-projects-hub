import type {IconButtonProps} from "../types/typesTodos.tsx";

const IconButton = ({onClick, disabled = false, addClasses = "", icon} : IconButtonProps) => {
    return (
        <>
            <button
                className={`border border-gray-300 hover:border-gray-500 p-2 ` + addClasses}
                onClick={onClick}
                disabled={disabled}
            >
                {icon}
            </button>
        </>
    )
}

export default IconButton;