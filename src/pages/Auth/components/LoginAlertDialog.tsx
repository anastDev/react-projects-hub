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
import { Button } from "@/components/ui/button"
import {Input} from "@/components/ui/input.tsx";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {type LoginFields, loginSchema} from "@/schemas/auth.schema.ts";
import {useNavigate} from "react-router";
import {toast} from "sonner";
import {useAuth} from "@/hooks/useAuth.ts";

export const LoginAlertDialog = () => {
    const navigate = useNavigate();
    const {loginUser} = useAuth();

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting, isLoading },
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
            toast.success("Login successful");
            navigate("/projects");
            reset();
        } catch(err) {
           toast.error(
               err instanceof Error ? err.message : "Login failed"
           )
        }
    }

    return (
        <>
            <AlertDialog>
                <AlertDialogTrigger asChild>
                    <Button variant="outline">Show Dialog</Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Login to your Account</AlertDialogTitle>
                        <AlertDialogDescription>
                            Enter your credentials to access your account
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <div className="space-y-8">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div>
                                <label htmlFor="username">Username</label>
                                <Input
                                    id="username"
                                    type="text"
                                    {...register('username')}
                                />
                                {errors.username && (
                                    <p className="text-red-600 text-sm">{errors.username.message}</p>
                                )}
                            </div>
                            <div>
                                <label htmlFor="password">Password</label>
                                <Input
                                    id="password"
                                    type="password"
                                    {...register('password')}
                                />
                                {errors.password && (
                                    <p className="text-red-600 text-sm">{errors.password.message}</p>
                                )}
                            </div>
                        </form>
                    </div>
                    <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction>{isSubmitting ? 'Loading' : 'Continue'}</AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </>
    )
}