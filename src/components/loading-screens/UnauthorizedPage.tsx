import {useNavigate} from "react-router";
import { Button } from "@/components/ui/button"
import {FaLock} from "react-icons/fa";

interface UnauthorizedScreenProps {
    title?: string;
    message?: string;
}

export const UnauthorizedPage = ({title = "Access Denied", message = "You need to be logged in to access this page"}: UnauthorizedScreenProps) => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full">
                <div className="text-center mb-6">
                    <div className="mx-auto w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                       <FaLock size={24} className="text-red-600"/>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
                    <p className="text-gray-500 mt-2">{message}</p>
                </div>

                <div className="space-y-3">
                    <Button
                        onClick={() => navigate('/')}
                        className="w-full bg-blue-600 hover:bg-blue-700"
                    >
                        Go to Homepage
                    </Button>
                </div>
            </div>
        </div>
    );
};