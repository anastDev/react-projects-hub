import {useEffect, useRef, useState} from "react";
import type {RoadConditions} from "@/projects/road-radar-dashboard/types/typesRoadConditions.ts";
import {getAllConditions} from "@/projects/road-radar-dashboard/services/api.conditions.ts";

interface LocationStatus {
    status: "idle" | "detecting" | "success" | "failed";
}

export const useRoadConditions = (city: string) => {
    const [conditions, setConditions] = useState<RoadConditions[]>([]);
    const [userLocation, setUserLocation] = useState<{lat: number; lng:number} | null>(null);
    const [loading, setLoading] = useState(false);
    const [locationStatus, setLocationStatus] = useState<LocationStatus>({status: "idle"});
    const [error, setError] = useState<string | null>(null);
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const settledRef = useRef(false);

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
           if (!settledRef.current) {
               setLocationStatus({status: "failed"});
               setError("Location request timed out. Please enable location access and try again.")
               setLoading(false);
           }
        }, 4000);

        navigator.geolocation.getCurrentPosition(
            async (position) => {
                settledRef.current = true;
                if (timeoutRef.current) clearTimeout(timeoutRef.current);
                const { latitude: lat, longitude: lng } = position.coords;

                try {
                   const data = await getAllConditions(city, lat, lng);
                    setConditions(data);
                    setUserLocation({ lat,lng});
                    setLocationStatus({status: "success"});
                } catch (err) {
                    console.error("Error: ", err);
                    setError("Failed to fetch road conditions")
                } finally {
                    setLoading(false);
                }
            },
            (err) => {
                settledRef.current = true;
                console.error("Geolocation error code:", err.code, err.message);
                clearTimeout(timeoutRef.current!);
                setLocationStatus({status: "failed"});
                setError("Unable to retrieve your location");
                setLoading(false);
            }
        )
        return () => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
        };
    }, [city]);

    return {conditions, loading, error, userLocation, locationStatus};

}