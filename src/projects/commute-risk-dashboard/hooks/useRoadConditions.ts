import {useEffect, useRef, useState} from "react";
import type {RoadConditions} from "@/projects/commute-risk-dashboard/types/typesRoadConditions.ts";

const VITE_BASE_URL = import.meta.env.VITE_BASE_URL;

interface LocationStatus {
    status: "idle" | "detecting" | "success" | "failed";
}

export const useRoadConditions = (city: string) => {
    const [conditions, setConditions] = useState<RoadConditions[]>([]);
    const [userLocation, setUserLocation] = useState<{lat: number; long:number} | null>(null);
    const [loading, setLoading] = useState(false);
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
        setLoading(true)

        timeoutRef.current = setTimeout(() => {
           if (locationStatus.status === "detecting" || locationStatus.status === "failed") {
               setLocationStatus({status: "failed"});
               setError("Location request timed out. Please enable location access and try again.")
               setLoading(false);
           }
        }, 10000);

        navigator.geolocation.getCurrentPosition(
            async (position) => {

                const { latitude: lat, longitude: long } = position.coords
                try {
                    const response = await fetch(`${VITE_BASE_URL}/conditions/${city}`, {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({ lat, long }),
                    })
                    const data = await response.json()
                    setConditions(data);
                    setUserLocation({lat, long});
                    setLocationStatus({status: "success"});
                } catch (err) {1
                    console.error("Error: ", err);
                    setError("Failed to fetch road conditions")
                } finally {
                    setLoading(false);
                }
            },
            (err) => {
                console.error("Geolocation error code:", err.code, err.message);
                clearTimeout(timeoutRef.current!);
                setLocationStatus({status: "failed"});
                setError("Unable to retrieve your location");
                setLoading(false);
            }
        )
    }, [city])

    return {conditions, loading, error, userLocation, locationStatus};

}