import type {WeatherApiResponse} from "@/projects/commute-risk-dashboard/types/typesWeather.ts";
import type {CommuteType, RiskResponse} from "@/projects/commute-risk-dashboard/types/typeRisk.ts";

function calculateRisk(weather: WeatherApiResponse, commute: CommuteType): RiskResponse {
    const reasons: string[] = [];
    const recommendations: string[] = [];

    const { temp, feels_like} = weather.main;
    const { speed: windSpeed, gust } = weather.wind;
    const description = weather.weather[0].description.toLowerCase();
    const visibility = weather.visibility; // metres, max 10000
    const rainVolume = weather.rain?.["1h"] ?? 0;
    const snowVolume = weather.snow?.["1h"] ?? 0;

    const hasIce = ["sleet", "ice", "freezing"].some(w => description.includes(w));
    const hasSnow = description.includes("snow") || snowVolume > 0;
    const hasRain = description.includes("rain") || rainVolume > 0;
    const lowVisibility = visibility < 3000;
    const strongWind = windSpeed > 10 || (gust ?? 0) > 15;
    const freezing = temp < 0 || feels_like < -3;

    let score = 0;

    // universal conditions
    if (hasIce)       { score += 3; reasons.push("Icy conditions detected"); }
    if (hasSnow)      { score += 2; reasons.push("Snow on roads and surfaces"); }
    if (hasRain)      { score += 1; reasons.push("Rain increases surface risk"); }
    if (freezing)     { score += 1; reasons.push(`Feels like ${Math.floor(feels_like)}°C — freezing conditions`); }
    if (strongWind)   { score += 1; reasons.push("Strong or gusty winds"); }
    if (lowVisibility){ score += 1; reasons.push("Reduced visibility"); }

    // mode-specific
    if (commute === "bike") {
        if (hasIce || hasSnow) { score += 3; reasons.push("Cycling on ice or snow is high risk"); }
        if (hasRain)           { score += 1; reasons.push("Wet roads reduce bike traction"); }
        if (strongWind)        { score += 1; reasons.push("Gusts are especially dangerous on a bike"); }
    }

    if (commute === "walking") {
        if (hasIce || hasSnow) { score += 1; reasons.push("Footpaths may be slippery"); }
    }

    if (commute === "bus" || commute === "tram") {
        if (hasIce || hasSnow) score += 1;
    }

    const level: "Low" | "Medium" | "High" =
        score <= 1 ? "Low" : score <= 3 ? "Medium" : "High";

    // recommendations
    if (level === "Low") {
        recommendations.push("Conditions look fine — no special precautions needed.");
    }
    if (level === "Medium") {
        recommendations.push("Allow extra travel time and stay alert.");
    }
    if (level === "High") {
        recommendations.push("Consider public transport or delaying your commute.");
    }
    if ((commute === "bike" || commute === "walking") && level === "High") {
        recommendations.push("Switching to bus or tram would be significantly safer today.");
    }
    if (commute === "bike" && level === "Medium" && hasRain) {
        recommendations.push("Waterproofs and extra caution on corners recommended.");
    }

    return { score, level, reasons, recommendations };
}

export default calculateRisk;