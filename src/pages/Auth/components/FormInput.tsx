import type {FormInputProps} from "@/pages/Auth/types/typesForm.ts";

export const FormInput = ({
                              type,
                              name,
                              placeholder,
                              register,
                              label,
                              options = [],
                          }: FormInputProps) => {

    if (type === 'select') {
        return (
            <div className="space-y-1">
                <label htmlFor={label} className="block font-medium mb-2">
                    {label}
                </label>
                <select
                    {...register(name)}
                    className="w-full border rounded-md px-4 py-2"
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
            <label htmlFor={label} className="block font-medium mb-2">
                {label}
            </label>
            <input
                type={type}
                {...register(name)}
                placeholder={placeholder}
                className="w-full border rounded-md px-4 py-2"
            />
        </div>
    );
};

export default FormInput;
