import Header from "@/components/layout/header/Header.tsx";
import Footer from "@/components/layout/Footer.tsx";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {Button} from "@/components/ui/button.tsx";
import { Separator } from "@/components/ui/separator"
import { Spinner } from "@/components/ui/spinner.tsx"
import {formFields} from "@/pages/auth/utils/formFields.ts";
import {type UpdateUser, updateUserSchema} from "@/schemas/user.schema.ts";
import {useNavigate} from "react-router";
import {zodResolver} from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";
import {useEffect, useState} from "react";
import {getUserById, updateUser} from "@/services/api.users.ts";
import {useAuth} from "@/hooks/useAuth.ts";
import {toast} from "sonner";

const initialValues: UpdateUser = {
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

export const ProfileEditPage = () => {
    const navigate = useNavigate();
    const { userId, loading } = useAuth();
    const isEdit = Boolean(userId);
    const [userData, setUserData] = useState<UpdateUser>(initialValues);

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm({
        resolver: zodResolver(updateUserSchema),
        defaultValues: initialValues,
    });

    useEffect(() => {
        if(!isEdit && !userId) {
            console.warn("No user ID available");
        }
        getUserById(userId!)
            .then((data) => {
                setUserData(data);
                const values = {
                    id: userId,
                    username: data.username,
                    email: data.email,
                    password: "",
                    firstname: data.firstname,
                    lastname: data.lastname,
                    area: data.area,
                    street: data.street,
                    number: data.number,
                    po: data.po,
                    municipality: data.municipality,
                    phoneType: data.phoneType,
                    phoneNumber: data.phoneNumber,
                };
                reset(values);
            })
            .catch((error) => {
                console.log("Error getting user:", error);
            })
        }, [isEdit,userId, reset, navigate]);

    const onClear = () => {
        reset(initialValues);
    }

    const onSubmit = async(data: Partial<UpdateUser>) => {
        try {
            if (isEdit && userId) {
                await updateUser(userId, data);
                toast.success("User updated successfully.");
            } else {
                navigate("/auth/register");
            }
        } catch (err) {
            toast.error(
                err instanceof Error ? err.message : "Something went wrong",
            )
        }
    }

    if(loading) {
        return (
            <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center text-gray-600">
                <Spinner className="size-8" />
                <p className="mt-4">Loading authentication...</p>
            </div>
        );
    }
    return (
        <>
           <div className="bg-gray-900">
               <Header />
               <div className="h-14" />
               <div className="max-w-xl lg:max-w-2xl xl:max-w-4xl mx-auto mt-10 px-4">
                   <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-8">
                       <div className="mb-8">
                           <h1 className="text-xl font-medium text-gray-800">
                               Hi,
                               <span className="ml-1 font-semibold text-gray-900">
                                {userData.username || "there"}
                            </span>
                               !
                           </h1>
                           <p className="text-sm text-gray-700 mt-1">
                               You can update your profile information below.
                           </p>
                       </div>

                       <Separator className="mb-6" />

                       {/* Form */}
                       <form
                           onSubmit={handleSubmit(onSubmit)}
                           className="space-y-5"
                       >
                           {formFields.map((field) => {
                               const fieldKey = field.name as keyof UpdateUser;
                               const error = errors[fieldKey];

                               return (
                                   <div key={field.name} className="space-y-1.5">
                                       <Label htmlFor={field.name}>
                                           {field.displayName}
                                       </Label>

                                       <Input
                                           id={field.name}
                                           type={field.type}
                                           placeholder={field.placeholder}
                                           {...register(fieldKey)}
                                           aria-invalid={!!error}
                                       />

                                       {error && (
                                           <p className="text-sm text-red-600">
                                               {error.message}
                                           </p>
                                       )}
                                   </div>
                               );
                           })}

                           <div className="flex gap-4 pt-4">
                               <Button
                                   type="submit"
                                   disabled={isSubmitting}
                                   className="bg-orange-500 text-gray-900 hover:bg-orange-400 focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 focus:ring-offset-gray-900"
                               >
                                   {isSubmitting ? "Updating…" : "Update Profile"}
                               </Button>

                               <Button
                                   type="button"
                                   onClick={onClear}
                                   className="border-gray-600 text-gray-300hover:bg-gray-700 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                               >
                                   Clear
                               </Button>
                           </div>
                       </form>
                   </div>
               </div>

               <div className="h-32" />
               <Footer />
           </div>
        </>
    );
}

export default ProfileEditPage;