import {Outlet, } from "react-router";
import {useAuth} from "@/hooks/useAuth.ts";
import {UnauthorizedPage} from "@/components/loading-screens/UnauthorizedPage.tsx";

const ProtectedRoute = () => {
    const {isAuthenticated} = useAuth();

    if(!isAuthenticated){
        return <UnauthorizedPage/>
    }
    return <Outlet/>
}

export default ProtectedRoute;