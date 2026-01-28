import type {ButtonProps} from "../types/typesTodos.tsx";

const Button = ({onClick, disabled=false, label, addClasses = ""} : ButtonProps) => {
    return (
        <>
            <button
                className={`
                inline-flex items-center justify-center px-4 py-2 rounded-md text-sm font-medium transition-colors 
                bg-sky-600 hover:bg-sky-800 text-gray-100 

                ${addClasses}
            `}
                onClick={onClick}
                disabled={disabled}
            >
                {label}
            </button>

        </>
    )
}

export default Button;