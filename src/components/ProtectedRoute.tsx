import {Outlet, } from "react-router";
import {useAuth} from "@/hooks/useAuth.ts";
import {UnauthorizedScreen} from "@/components/loading-screens/UnauthorizedScreen.tsx";

const ProtectedRoute = () => {
    const {isAuthenticated} = useAuth();

    if (isAuthenticated)  {
        return <Outlet />
    }

    return <UnauthorizedScreen/>
}

export default ProtectedRoute;