import Header from "@/components/layout/Header/Header.tsx";
import Footer from "@/components/layout/Footer.tsx";
import {Button} from "@/components/ui/button.tsx"
import FormInput from "./components/FormInput.tsx";
import {formFields} from "@/pages/Auth/utils/formFields.ts";
import {userSchema, type UserValues} from "@/schemas/user.schema.ts";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";

const initialValues: UserValues = {
    username: '',
    email: '',
    password: '',
    firstname: '',
    lastname: '',
    area: '',
    street: '',
    number: '',
    po: '',
    municipality: '',
    phoneType: '',
    phoneNumber: '',
}

export const RegisterPage = () => {
    const {
        register,
        handleSubmit,
        formState: {errors, isSubmitting},
        reset,
        watch
    } = useForm<UserValues>({
        resolver: zodResolver(userSchema),
        defaultValues:initialValues,
    });

    const watchedValues = watch();

    const onClear = () => {
        reset();
    }

    const onSubmit = () => {
        reset();
    }

    return (
        <>
            <Header/>
            <div className="h-14"></div>
            <form onSubmit={handleSubmit(onSubmit)} action="" className="max-w-md mx-auto space-y-4 mt-12">
                {formFields.map((field) => {
                    const fieldKey = field.name as keyof UserValues;
                    const error = errors?.[field.name as keyof UserValues];
                    return (
                       <>
                           <FormInput
                               name={field.name as keyof UserValues}
                               key={fieldKey}
                               type={field.type}
                               label={field.displayName}
                               register={register}
                               placeholder={field.placeholder}
                               options={field.options}
                               required={field.required}
                           />
                           {error && (
                               <p className="text-red-600 text-sm">{error.message}</p>
                           )}
                       </>
                    )
                })}
                <div className="flex space-x-4">
                    <div>
                        <Button variant="outline">{isSubmitting ? 'Submitting': 'Submit'}</Button>
                    </div>
                    <div>
                        <Button onClick={onClear} variant="outline">Clear</Button>
                    </div>
                </div>
            </form>
            <div className="h-32"></div>
            <Footer/>
        </>
    )
}