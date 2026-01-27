import {useAuth} from "@/hooks/useAuth.ts";
import { Button } from "@/components/ui/button"
import {useNavigate} from "react-router";

export const LogoutButton = () => {
    const {logoutUser} = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logoutUser();
        navigate("/");
    }

    return (
        <>
            <Button
                onClick={handleLogout}
                size="sm"
                variant="destructive"
                className=" border-red-500/40 text-gray-900 hover:bg-red-500/10 hover:text-red-300 focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-900"
            >
                Logout
            </Button>
        </>
    )
}

export default LogoutButton;