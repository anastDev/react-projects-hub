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
            <div className="container max-w-md mx-auto flex flex-col text-center mt-5">
               {formattedDate} <span>{formattedTime}</span>
            </div>

        </>
    )
}

export default ShowDate;