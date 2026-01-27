import Header from "@/components/layout/Header/Header.tsx";
import Footer from "@/components/layout/Footer.tsx";
import {Button} from "@/components/ui/button.tsx"
import FormInput from "./components/FormInput.tsx";
import {formFields} from "@/pages/Auth/utils/formFields.ts";
import {userSchema, type User} from "@/schemas/user.schema.ts";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {createUser} from "@/services/api.users.ts";
import {useNavigate} from "react-router";
import {toast} from "sonner";
import {useAuth} from "@/hooks/useAuth.ts";

const initialValues: User = {
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
    const navigate = useNavigate();
    const {loginUser} = useAuth();

    const {
        register,
        handleSubmit,
        formState: {errors, isSubmitting},
        reset,

    } = useForm<User>({
        resolver: zodResolver(userSchema),
        defaultValues:initialValues,
    });

    const onClear = () => {
        reset();
    }

    const onSubmit = async(data: User) => {
        try{
            await createUser(data);
            try {
                await loginUser({
                    username: data.username,
                    password: data.password,
                });
                toast.success("User created successfully.");
                navigate("/");
                reset();
            } catch (err) {
               console.warn(err);
            }
        } catch (err)  {
            toast.error(
                err instanceof Error ? err.message : "Error creating user",
            )
        }
    }


    return (
        <>
            <Header/>
            <div className="h-14"></div>
            <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto space-y-4 mt-12">
                {formFields.map((field) => {
                    const fieldKey = field.name as keyof User;
                    const error = errors?.[field.name as keyof User];
                    return (
                       <>
                           <FormInput
                               name={field.name as keyof User}
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
                        <Button
                            type="submit"
                            disabled={isSubmitting}
                            variant="outline">
                            {isSubmitting ? 'Submitting': 'Submit'}
                        </Button>
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