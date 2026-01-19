import type {ButtonProps} from "../types/typesTodos.tsx";

const Button = ({onClick, disabled=false, label, addClasses = ""} : ButtonProps) => {
    return (
        <>
            <button
                className={`bg-gray-800 hover:gray-600 hover:opacity-90 text-white px-4 py-2 rounded-md` + addClasses}
                onClick={onClick}
                disabled={disabled}
            >
                {label}
            </button>

        </>
    )
}

export default Button;