import {useEffect, useState} from "react";

const ShowDate = () => {
    const [date, setDate] = useState(new Date());

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
            <div className="container max-w-md mx-auto flex flex-col text-center text-gray-300 ">
             <div className="mt-4">
                 <div className="font-medium text-lg">{formattedDate}</div>
                 <div className="font-semibold mt-1">
                     {formattedTime}
                 </div>
             </div>
            </div>

        </>
    )
}

export default ShowDate;