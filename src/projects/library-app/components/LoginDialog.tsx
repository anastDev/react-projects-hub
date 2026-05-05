import {useAuth} from "@/projects/library-app/hooks/useAuth.ts";
import {useState} from "react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import {Button} from "@/components/ui/button.tsx";
import {User} from "lucide-react";
import { Label } from "@/components/ui/label"
import {Input} from "@/components/ui/input.tsx";
import {toast} from "sonner";

const LoginDialog = () => {
    const { login } = useAuth();
    const [open, setOpen] = useState(false);
    const [username_input, setUsernameInput] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
        setLoading(true);
        try {
            await login(username_input, password);
            setOpen(false);
            setUsernameInput("");
            setPassword("");
            toast.success("Login successful", {
                duration: 2000,
            });
        } catch (err: any) {
            setError(err.message ?? "Login failed. Please try again.");
            toast.error(
                err instanceof Error ? err.message : "Login failed"
            )
        } finally {
            setLoading(false);
        }
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button
                    size="icon-lg"
                    className=" hover:text-blue-700"
                >
                    <User />
                </Button>
            </DialogTrigger>

            <DialogContent className="max-w-md bg-gray-900 border-gray-800">
                <DialogHeader>
                    <DialogTitle className="text-gray-100">Sign in</DialogTitle>
                    <DialogDescription className="text-gray-500">
                        Sign in to borrow books from the collection.
                    </DialogDescription>
                </DialogHeader>
               <div>
                   <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-2">
                       <div className="flex flex-col gap-1.5">
                           <Label htmlFor="username" className="text-sm text-gray-400">
                               Username
                           </Label>
                           <Input
                               id="username"
                               type="text"
                               value={username_input}
                               onChange={(e) => setUsernameInput(e.target.value)}
                               placeholder="Enter your username"
                               required
                               className="bg-gray-800 border-gray-700 text-gray-100 placeholder-gray-600 focus:border-blue-600"
                           />
                       </div>

                       <div className="flex flex-col gap-1.5">
                           <Label htmlFor="password" className="text-sm text-gray-400">
                               Password
                           </Label>
                           <Input
                               id="password"
                               type="password"
                               value={password}
                               onChange={(e) => setPassword(e.target.value)}
                               placeholder="Enter your password"
                               required
                               className="bg-gray-800 border-gray-700 text-gray-100 placeholder-gray-600 focus:border-blue-600"
                           />
                       </div>

                       {/* Error message from the API  */}
                       {error && (
                           <p className="text-xs text-red-400 rounded-lg bg-red-950 border border-red-800 px-3 py-2">
                               {error}
                           </p>
                       )}

                       <Button
                           type="submit"
                           disabled={loading}
                           className="w-full bg-blue-600 hover:bg-blue-500 text-white disabled:bg-gray-800 disabled:text-gray-600"
                       >
                           {loading ? "Signing in..." : "Sign in"}
                       </Button>
                   </form>
               </div>
            </DialogContent>
        </Dialog>
    )
}

export default LoginDialog;