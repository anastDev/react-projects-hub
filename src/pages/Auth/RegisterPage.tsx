import Header from "@/components/layout/Header/Header.tsx";
import Footer from "@/components/layout/Footer.tsx";
import {type ChangeEvent, type FormEvent, useState} from "react";
import {Button} from "@/components/ui/button.tsx"
import {formFields} from "@/pages/Auth/utils/formFields.ts";
import FormInput from "./components/FormInput.tsx";
import {userSchema, type UserValues} from "@/schemas/user.schema.ts";
import type {FormErrors} from "@/pages/Auth/types/typesForm.ts";

const initialValues: UserValues = {
    username: "",
    password: "",
    firstname:"",
    lastname:"",
    email: "",
    area: "",
    street: "",
    number: "",
    po: "",
    municipality: "",
    phoneType: "",
    phoneNumber: "",
}

export const RegisterPage = () => {
    const [values, setValues] = useState<UserValues>(initialValues);
    const [submittedData, setSubmittedData] = useState<UserValues | null>(null);
    const [errors, setErrors] = useState<FormErrors | null>(null);

    const validateFrom = (): boolean => {
        const result = userSchema.safeParse(values);

        console.log(result.error?.issues);
        if(!result.success){
            const newErrors: FormErrors = {};
            result.error?.issues.forEach((issue) => {
                const fieldName = issue.path[0] as keyof FormErrors;
                newErrors[fieldName] = issue.message;

            });
            setErrors(newErrors);
            return false;
        }
        setErrors({});
        return true;
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const {name, value} = e.target;

        setValues((prev) => {
           return {
               ...prev,
               [name]: value,
           }
        });
    }

    const handleClear = () => {
        setValues(initialValues);
        setSubmittedData(null);
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const isValid = validateFrom();
        if(isValid){
            setSubmittedData(initialValues);
            setValues(values);
            setErrors({});
        }
    }

    return (
        <>
            <Header/>
            <div className="h-14"></div>
            <form onSubmit={handleSubmit} action="" className="max-w-md mx-auto space-y-4 mt-12">
                {formFields.map((field) => {
                    const fieldKey = field.name as keyof UserValues;
                    return (
                       <>
                           <FormInput
                               key={fieldKey}
                               type={field.type}
                               label={field.displayName}
                               name={field.name}
                               value={values[fieldKey] || ""}
                               placeholder={field.placeholder}
                               options={field.options}
                               onChange={handleChange}
                               required={field.required}
                           />
                           {errors?.[fieldKey] && (
                               <p className="text-red-600 text-sm">{errors?.[fieldKey]}</p>
                           )}
                       </>
                    )
                })}
                <div className="flex space-x-4">
                    <div>
                        <Button variant="outline">Submit</Button>
                    </div>
                    <div>
                        <Button onClick={handleClear} variant="outline">Clear</Button>
                    </div>
                </div>
            </form>
            <div className="h-32"></div>
            <Footer/>
        </>
    )
}