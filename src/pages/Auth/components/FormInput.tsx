import type {FormInputProps} from "@/pages/Auth/types/typesForm.ts";

export const FormInput = ({
                              type,
                              name,
                              value,
                              placeholder,
                              onChange,
                              label,
                              options = [],
                          }: FormInputProps) => {

    if (type === 'select') {
        return (
            <div className="space-y-1">
                <label htmlFor={label} className="block text-sm font-medium">
                    {label}
                </label>
                <select
                    name={name}
                    value={value}
                    onChange={onChange}
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
            <label htmlFor={label} className="block text-sm font-medium">
                {label}
            </label>
            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className="w-full border rounded-md px-4 py-2"
            />
        </div>
    );
};

export default FormInput;
