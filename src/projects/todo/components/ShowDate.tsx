import {useEffect, useState} from "react";
import {useNavigate} from "react-router";
import {Button} from "@/components/ui/button.tsx"

const ShowDate = () => {
    const [date, setDate] = useState(new Date());
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setInterval(() => {
            setDate(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);


    const formattedDate = date.toLocaleString("en-GB", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "2-digit",
    });

    const formattedTime = date.toLocaleTimeString("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
    })

    return (
        <>
            <div className="container mx-auto grid grid-cols-3">
                <div className="place-content-center">
                   <Button
                       variant="ghost"
                       onClick={()=> navigate("/projects")}
                       className="bg-sky-600 hover:bg-sky-800 text-gray-100 hover:text-gray-300"
                   > Go Back
                   </Button>
                </div>
                <div className="">
                    <div className="mt-4 flex flex-col text-center text-gray-300">
                        <div className="font-medium text-lg">{formattedDate}</div>
                        <div className="font-semibold mt-1">
                            {formattedTime}
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ShowDate;