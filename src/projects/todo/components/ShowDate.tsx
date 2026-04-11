import {useEffect, useState} from "react";
import {useNavigate} from "react-router";
import {Button} from "@/components/ui/button.tsx"
import {ChevronLeft} from "lucide-react";


const ShowDate = () => {
    const [date, setDate] = useState(new Date());
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setInterval(() => setDate(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    const formattedTime = date.toLocaleTimeString("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
    });

    return (
        <div className="container mx-auto flex items-center justify-between px-4">
            <Button
                variant="ghost"
                size="sm"
                onClick={() => navigate("/projects")}
                className="bg-transparent hover:bg-white/5 border border-slate-600 text-slate-200 hover:text-white gap-1.5 rounded-lg px-4 py-2"
            >
                <ChevronLeft />
                Projects
            </Button>

            <div className="flex flex-col items-center">
                <p className="text-xs uppercase tracking-widest text-slate-500 font-medium">
                    {date.toLocaleDateString("en-GB", { weekday: "long" })}
                    <span className="ml-2 text-slate-400 mt-0.5">{date.toLocaleDateString("en-GB", {
                        year: "numeric",
                        month: "long",
                        day: "2-digit",
                    })}</span>
                </p>
                <p className="text-2xl font-semibold text-slate-100 tracking-tight mt-1">
                    {formattedTime}
                </p>
            </div>

            {/* Spacer to keep date centred */}
            <div className="w-24" />
        </div>
    );
};

export default ShowDate;