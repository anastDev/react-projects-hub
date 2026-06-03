import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetDescription,
} from "@/components/ui/sheet";
import {Button} from "@/components/ui/button.tsx";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {toast} from "sonner";
import {registerSchema, type RegisterUser} from "@/projects/library-app/schema/user.schema.ts";
import {loginUser} from "@/projects/library-app/service/api.login.ts";
import {registerUser} from "@/projects/library-app/service/api.register.ts";
import FormInput from "@/pages/auth/components/FormInput.tsx";
import {registerFields} from "@/projects/library-app/utils/registerFields.ts";

interface RegisterSheetProps {
    open: boolean;
    onOpenChange?: (open: boolean) => void
}

const initialValues: RegisterUser = {
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
    dateOfBirth: "",
    gender: "" as "MALE" | "FEMALE" | "OTHER",
    role: "MEMBER"
}

const RegisterSheet = ({open, onOpenChange}: RegisterSheetProps) => {
    const {
        register,
        handleSubmit,
        formState: {errors, isSubmitting},
        reset,

    } = useForm<RegisterUser>({
        resolver: zodResolver(registerSchema),
        defaultValues :initialValues,
    });

    const onClear = () => {
        reset();
    }

    const onSubmit = async(data: RegisterUser) => {
        try{
            await registerUser(data);
            try {
               await loginUser({username: data.username, password: data.password});
               onOpenChange?.(false);
                toast.success("User created successfully.");
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
        <Sheet open={open} onOpenChange={onOpenChange}>
            <SheetContent className="bg-gray-900 border-gray-800 w-full sm:max-w-lg overflow-y-auto [&>button]:text-gray-100">
                <SheetHeader>
                    <SheetTitle className="text-gray-100">Sign up</SheetTitle>
                    <SheetDescription className="text-gray-500">
                        Sign up to borrow books from the collection.
                    </SheetDescription>
                </SheetHeader>

                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 px-4">
                    <div className="grid grid-cols-2 gap-3">
                        {registerFields
                            .filter((f) => f.name === "firstname" || f.name === "lastname")
                            .map((field) => (
                                <div key={field.name}>
                                    <FormInput
                                        name={field.name as keyof RegisterUser}
                                        key={field.name as keyof RegisterUser}
                                        type={field.type}
                                        label={field.displayName}
                                        register={register}
                                        placeholder={field.placeholder}
                                        options={field.options}
                                        required={field.required}
                                        className="focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    />
                                    {errors?.[field.name as keyof RegisterUser] && (
                                        <p className="text-red-400 text-sm">
                                            {errors[field.name as keyof RegisterUser]?.message}
                                        </p>
                                    )}
                                </div>
                            ))}
                    </div>

                    {/* remaining fields full width */}
                    {registerFields
                        .filter((f) => f.name !== "firstname" && f.name !== "lastname")
                        .map((field) => (
                            <div key={field.name}>
                                <FormInput
                                    name={field.name as keyof RegisterUser}
                                    key={field.name as keyof RegisterUser}
                                    type={field.type}
                                    label={field.displayName}
                                    register={register}
                                    placeholder={field.placeholder}
                                    options={field.options}
                                    required={field.required}
                                    className=""
                                />
                                {errors?.[field.name as keyof RegisterUser] && (
                                    <p className="text-red-400 text-sm">
                                        {errors[field.name as keyof RegisterUser]?.message}
                                    </p>
                                )}
                            </div>
                        ))}

                    <div className="flex flex-col gap-2 mt-4">
                        <Button type="submit" disabled={isSubmitting}
                                className="w-full bg-blue-600 hover:bg-blue-500 text-white disabled:bg-gray-800 disabled:text-gray-600">
                            {isSubmitting ? "Signing up..." : "Sign up"}
                        </Button>
                        <Button type="button" onClick={onClear}
                                className="w-full bg-transparent border border-gray-700 text-gray-400 hover:border-gray-500">
                            Clear
                        </Button>
                    </div>
                </form>
            </SheetContent>
        </Sheet>
    )
}

export default RegisterSheet;