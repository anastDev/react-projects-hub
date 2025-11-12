import type {IconButtonProps} from "../../types.tsx";

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