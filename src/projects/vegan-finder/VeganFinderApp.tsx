import {useEffect, useState} from "react";
import ResultsPage from "@/projects/vegan-finder/components/ResultPage.tsx";
import WelcomePage from "@/projects/vegan-finder/components/WelcomePage.tsx";
import {useRestaurants} from "@/projects/vegan-finder/hooks/useRestaurants.ts";
import {Theme} from "@radix-ui/themes";

type Screens = "welcome" | "results";

const VeganFinderApp = () => {
    const { restaurants, fetchRestaurants } = useRestaurants();
    const [step, setStep] = useState<Screens>("welcome");

    const handleLocationFound = async (coords: { lat: number; lng: number }) => {
        await fetchRestaurants(coords.lat, coords.lng);
        setStep("results");
    };

    useEffect(() => {
        document.title = "VeganFinder App";
    }, []);

    return (
        <Theme>
            {step === "results" ? (
                <ResultsPage restaurants={restaurants}/>
            ) : (
                <WelcomePage onLocationFound={handleLocationFound} />
            )}
        </Theme>
    );
};

export default VeganFinderApp;