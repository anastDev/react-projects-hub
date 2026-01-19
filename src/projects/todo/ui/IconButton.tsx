import type {IconButtonProps} from "../types/typesTodos.tsx";

const IconButton = ({onClick, disabled = false, addClasses = "", icon} : IconButtonProps) => {
    return (
        <>
            <button
                className={` ` + addClasses}
                onClick={onClick}
                disabled={disabled}
            >
                {icon}
            </button>
        </>
    )
}

export default IconButton;