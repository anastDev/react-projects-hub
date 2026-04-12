export function getSeverity(conditionText: string): "High" | "Medium" | "Low" {
    const text = conditionText.toLowerCase();

    if (["is", "halt", "halka", "frost", "frys", "sleet"].some(w => text.includes(w))) {
        return "High";
    }

    if (["snö", "våt", "regn", "modd"].some(w => text.includes(w))) {
        return "Medium";
    }

    return "Low";
}

export const severityConfig = {
    High: {
        label: "High Risk",
        text:  "text-red-400",
        card:  "bg-red-500/10 border-red-500/20",
    },
    Medium: {
        label: "Caution",
        text:  "text-amber-400",
        card:  "bg-amber-500/10 border-amber-500/20",
    },
    Low: {
        label: "Normal",
        text:  "text-emerald-400",
        card:  "bg-emerald-500/10 border-emerald-500/20",
    },
} as const;