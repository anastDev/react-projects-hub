import Header from "@/components/layout/Header/Header.tsx";
import Footer from "@/components/layout/Footer.tsx";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {Button} from "@/components/ui/button.tsx";
import { Separator } from "@/components/ui/separator"
import { Spinner } from "@/components/ui/spinner.tsx"
import {formFields} from "@/pages/Auth/utils/formFields.ts";
import {type UpdateUser, updateUserSchema} from "@/schemas/user.schema.ts";
import {useNavigate} from "react-router";
import {zodResolver} from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";
import {useEffect, useState} from "react";
import {getUserById, updateUser} from "@/services/api.users.ts";
import {toast} from "sonner";
import {useAuth} from "@/hooks/useAuth.ts";

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
                toast.error("Failed loading user data");
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
            navigate("/");
        } catch (error) {
            toast.error(
                error instanceof Error ? error.message : "Something went wrong",
            );
        }
    }

    if(loading) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center">
                <Spinner className="size-8" />
                <p className="mt-4">Loading authentication...</p>
            </div>
        );
    }

    return (
        <>
            <Header/>
            <div className="h-14"></div>
            <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto space-y-4 mt-8">
                <div className="max-w-4xl mx-auto">
                    <div className="mb-6">
                        <h1 className="text-xl font-bold text-gray-900">
                            Hi,
                            <span className="ml-2 mr-1">{userData.username || 'there'}
                            </span>!
                        </h1>
                        <p className="text-gray-600 mt-2b text-sm">
                            You can update your profile information below.
                        </p>
                    </div>
                </div>
                <Separator/>
                {formFields.map((field) => {
                    const fieldKey = field.name as keyof UpdateUser;
                    const error = errors[fieldKey];
                    return (
                        <>
                            <div key={field.name} className="space-y-2">
                                <Label htmlFor={field.name}>{field.displayName}</Label>
                                <Input
                                    type={field.type}
                                    placeholder={field.placeholder}
                                    {...register(fieldKey)}
                                />
                                {error && (
                                    <div className="text-red-600 text-sm">
                                        {error?.message}
                                    </div>
                                )}
                            </div>
                        </>
                    )
                })}
                <div className="flex space-x-4">
                    <div>
                        <Button
                            type="submit"
                            disabled={isSubmitting}
                            variant="outline">
                            {isSubmitting ? 'Updating': 'Update Profile'}
                        </Button>
                    </div>
                    <div>
                        <Button
                            onClick={onClear}
                            variant="outline">
                            Clear
                        </Button>
                    </div>
                </div>
            </form>
            <div className="h-32"></div>
            <Footer/>
        </>
    )
}

export default ProfileEditPage;