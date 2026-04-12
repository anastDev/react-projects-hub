import {useEffect, useState} from "react";
import type {RoadConditions} from "@/projects/commute-risk-dashboard/types/typesRoadConditions.ts";

const VITE_BASE_URL = import.meta.env.VITE_BASE_URL;

export const useRoadConditions = (city: string) => {
    const [conditions, setConditions] = useState<RoadConditions[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!city) return

        if (!navigator.geolocation) {
            setError("Geolocation is not supported by your browser")
            return
        }

        setLoading(true);

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
                    console.log("Received lat and long coords", lat, long);
                    console.log(data);
                    setConditions(data)
                } catch (err) {
                    console.log("Error: ", err);
                    setError("Failed to fetch road conditions")
                } finally {
                    setLoading(false);
                }
            },
            () => {
                setError("Unable to retrieve your location")
                setLoading(false);
            }
        )
    }, [city])

    return {conditions, loading, error};

}