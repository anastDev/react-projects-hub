export interface RiskResponse {
    score: number;
    level: "Low" | "Medium" | "High" ;
    reasons: string[];
    recommendations: string[];
}