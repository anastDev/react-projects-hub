import type {FormInputProps} from "@/pages/Auth/types/typesForm.ts";

export const FormInput= ({type, name, value, placeholder, onChange, error} : FormInputProps) => {
    return (
      <>
          <input
              type={type}
              name={name}
              value={value}
              onChange={onChange}
              placeholder={placeholder}
              className="w-full border rounded-md px-4 py-2"
              required/>
          {error && <span className="text-red-500">{error}</span>}
      </>
    );
};

export default FormInput;
