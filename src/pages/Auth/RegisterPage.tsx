import Header from "@/components/layout/Header/Header.tsx";
import Footer from "@/components/layout/Footer.tsx";
import {type ChangeEvent, type FormEvent, useState} from "react";
import {Button} from "@/components/ui/button.tsx"
import {registerFields} from "@/pages/Auth/utils/formFields.ts";
import FormInput from "./components/FormInput.tsx";
import {formSchema, type FormValues} from "@/schemas/auth.schema.ts";
import type {FormErrors} from "@/pages/Auth/types/typesForm.ts";

const initialValues: FormValues = {
    username: "",
    password: "",
    firstname:"",
    lastname:"",
    email: "",
}

export const RegisterPage = () => {
    const [values, setValues] = useState<FormValues>(initialValues);
    const [submittedData, setSubmittedData] = useState<FormValues | null>(null);
    const [errors, setErrors] = useState<FormErrors | null>({});

    const validateFrom = (): boolean => {
        const result = formSchema.safeParse(values);

        if(!result.success){
            const newErrors: FormErrors = {};
            result.error?.issues.forEach((issue) => {
                const fieldName = issue.path[0] as keyof FormErrors;
                newErrors[fieldName] = issue.message;

            });
            setErrors(newErrors);
            return false;
        }
        console.log(">>>Values>>>", values)
        setErrors({});
        return true;
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
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
            setSubmittedData(values);
            setValues(initialValues);
        }
    }

    return (
        <>
            <Header/>
            <div className="h-14"></div>
            <form onSubmit={handleSubmit} action="" className="max-w-md mx-auto space-y-4 mt-12">
                {registerFields.map((field) => {
                    const fieldKey = field.name.toLowerCase() as keyof FormValues;
                    return (
                       <div key={fieldKey}>
                           <label htmlFor={field.name}>{field.name}</label>
                           <FormInput
                               key={field.name}
                               type={field.type}
                               name={field.name}
                               value={values[fieldKey || ""]}
                               placeholder={field.placeholder}
                               onChange={handleChange}
                               error={errors?.[fieldKey]}
                           />
                       </div>
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
            <div className="h-18"></div>
            <Footer/>
        </>
    )
}