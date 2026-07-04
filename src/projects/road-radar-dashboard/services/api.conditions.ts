import type {DeviationConditions, RoadConditions} from "@/projects/road-radar-dashboard/types/typesRoadConditions.ts";

const VITE_BASE_URL = import.meta.env.VITE_BASE_URL;

export async function getAllConditions(city: string, lat: number, lng:number): Promise<RoadConditions[]> {
  try {
        const response = await fetch(`${VITE_BASE_URL}/conditions/${city}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ lat, lng }),
        })
        return await response.json();
    } catch (err) {
        console.error("Error fetching conditions: ",err);
        throw err;
    }
}

export async function getAllDeviations(city: string, lat: number, long:number): Promise<DeviationConditions[]> {
    try {
        const response = await fetch(`${VITE_BASE_URL}/conditions/deviations/${city}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ lat, long }),
        })

        return await response.json();
    } catch(err) {
        console.error("Error fetching deviations: ",err);
        throw err;
    }
}