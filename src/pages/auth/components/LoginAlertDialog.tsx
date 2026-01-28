import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import {Input} from "@/components/ui/input.tsx";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {type LoginFields, loginSchema} from "@/schemas/auth.schema.ts";
import {useNavigate} from "react-router";
import {toast} from "sonner";
import {useAuth} from "@/hooks/useAuth.ts";
import {useState} from "react";

export const LoginAlertDialog = () => {
    const navigate = useNavigate();
    const {loginUser} = useAuth();
    const [isOpen, setIsOpen] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting},
        reset,
    } = useForm<LoginFields>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            username: '',
            password: '',
        }
    });

    const onSubmit = async  (data: LoginFields) => {
        try{
            await loginUser(data);
            toast.success("Login successful", {
                duration: 2000,
            });
            navigate("/");
            reset();
        } catch(err) {
            console.error('❌ onSubmit error:', err);
           toast.error(
               err instanceof Error ? err.message : "Login failed"
           )
        }
    };

    const handleOpenChange = (open: boolean) => {
        setIsOpen(open);
    };

    return (
        <>
            <AlertDialog open={isOpen} onOpenChange={handleOpenChange}>
                <AlertDialogTrigger asChild>
                    <div className="hover:underline hover:text-orange-400 cursor-pointer text-gray-100 transition-colors">
                        Login
                    </div>
                </AlertDialogTrigger>
                <AlertDialogContent className="bg-gray-900 text-gray-100 border border-gray-700">
                    <AlertDialogHeader>
                        <AlertDialogTitle className="text-gray-100">Login to your Account</AlertDialogTitle>
                        <AlertDialogDescription className="text-gray-400">
                            Enter your credentials to access your account
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <div>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="mb-2">
                                <label htmlFor="username" className="text-gray-200">Username</label>
                                <Input
                                    id="username"
                                    type="text"
                                    {...register('username')}
                                    className="mt-2 bg-gray-800 text-gray-100 border-gray-600 focus:border-orange-400 focus:ring-orange-400"
                                />
                                {errors.username && (
                                    <p className="text-red-600 text-sm">{errors.username.message}</p>
                                )}
                            </div>
                            <div>
                                <label htmlFor="password" className="mb-1 text-gray-200">Password</label>
                                <Input
                                    id="password"
                                    type="password"
                                    {...register('password')}
                                    className="mt-2 bg-gray-800 text-gray-100 border-gray-600 focus:border-orange-400 focus:ring-orange-400"
                                />
                                {errors.password && (
                                    <p className="text-red-600 text-sm">{errors.password.message}</p>
                                )}
                            </div>
                        </form>
                    </div>
                    <AlertDialogFooter>
                        <AlertDialogCancel
                            className="bg-gray-800 text-gray-100 border-gray-600 hover:bg-gray-700 transition-colors"
                        >Cancel
                        </AlertDialogCancel>
                        <AlertDialogAction
                            onClick={handleSubmit(onSubmit)}
                            className="bg-orange-500 text-gray-900 hover:bg-orange-400 transition-colors"
                        >
                            {isSubmitting ? 'Loading' : 'Continue'}
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </>
    )
}