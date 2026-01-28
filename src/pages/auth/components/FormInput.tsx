import type {FormInputProps} from "@/pages/auth/types/typesForm.ts";

export const FormInput = ({
                              type,
                              name,
                              placeholder,
                              register,
                              label,
                              options = [],
                          }: FormInputProps) => {
    const baseStyles = `
    w-full rounded-md px-4 py-2 border bg-white text-gray-900 border-gray-300
    hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400
  `;


    if (type === 'select') {
        return (
            <div className="space-y-1">
                <label htmlFor={label} className="block font-medium mb-2 text-gray-700">
                    {label}
                </label>
                <select
                    {...register(name)}
                    className={baseStyles}
                >
                    <option value="">{placeholder || 'Select an option'}</option>
                    {options.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
            </div>
        );
    }
    return (
        <div className="space-y-1">
            <label htmlFor={label} className="block font-medium mb-2 text-gray-700">
                {label}
            </label>
            <input
                type={type}
                {...register(name)}
                placeholder={placeholder}
                className={baseStyles}
            />
        </div>
    );
};

export default FormInput;
