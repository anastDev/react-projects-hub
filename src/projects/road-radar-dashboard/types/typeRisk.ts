export type CommuteType = "walking" | "bike" | "car" | "bus" | "tram"| "";

export interface RiskDisplayProps {
    risk: RiskResponse;
    commute: CommuteType;
}

export type RiskResponse = {
    score: number;
    level: "Low" | "Medium" | "High" ;
    reasons: string[];
    recommendations: string[];
}