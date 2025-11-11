import type {ButtonProps} from "../../types.tsx";

const Button = ({onClick, disabled=false, label, addClasses = ""} : ButtonProps) => {
    return (
        <>
            <button
                className={`bg-gray-800 opacity-90 hover:gray-600 hover:opacity-100 text-white px-4 py-2 rounded-md` + addClasses}
                onClick={onClick}
                disabled={disabled}
            >
                {label}
            </button>

        </>
    )
}

export default Button;