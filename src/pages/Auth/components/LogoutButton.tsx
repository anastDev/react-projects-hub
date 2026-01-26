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
            <Button onClick={handleLogout} size="sm" variant="outline">
                Logout
            </Button>
        </>
    )
}

export default LogoutButton;