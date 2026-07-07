import {useEffect, useRef, useState} from "react";
import type {DeviationConditions} from "@/projects/road-radar-dashboard/types/typesRoadConditions.ts";
import {getAllDeviations} from "@/projects/road-radar-dashboard/services/api.conditions.ts";

interface LocationStatus {
    status: "idle" | "detecting" | "success" | "failed";
}

export const useDeviations = (city: string) => {
    const [deviations, setDeviations] = useState<DeviationConditions[]>([]);
    const [userLocation, setUserLocation] = useState<{lat: number; lng:number} | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [locationStatus, setLocationStatus] = useState<LocationStatus>({status: "idle"});
    const [error, setError] = useState<string | null>(null);
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    useEffect(() => {
        if (!city) return;

        if (!navigator.geolocation) {
            setLocationStatus({status: "failed"});
            setError("Geolocation is not supported by your browser")
            return
        }

        setLocationStatus({status:"detecting"});
        setIsLoading(true)

        timeoutRef.current = setTimeout(() => {
            if (locationStatus.status === "detecting" || locationStatus.status === "failed") {
                setLocationStatus({status: "failed"});
                setError("Location request timed out. Please enable location access and try again.")
                setIsLoading(false);
            }
        }, 10000);

        navigator.geolocation.getCurrentPosition(
            async (position) => {

                const { latitude: lat, longitude: lng } = position.coords;

                try {
                    const data = await getAllDeviations(city, lat, lng);
                    setDeviations(data);
                    setUserLocation({lat, lng});
                    setLocationStatus({status: "success"});
                } catch (err) {
                    console.error("Error: ", err);
                    setError("Failed to fetch road conditions")
                } finally {
                    setIsLoading(false);
                }
            },
            (err) => {
                console.error("Geolocation error code:", err.code, err.message);
                clearTimeout(timeoutRef.current!);
                setLocationStatus({status: "failed"});
                setError("Unable to retrieve your location");
                setIsLoading(false);
            }
        )

    }, [city])

    return {deviations, isLoading, error, userLocation, locationStatus};

}