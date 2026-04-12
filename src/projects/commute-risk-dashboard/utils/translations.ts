export const conditionTranslations: Record<string, string> = {
    "Torr vägbana":           "Dry road surface",
    "Våt vägbana":            "Wet road surface",
    "Halt väglag":            "Icy road conditions",
    "Halt väglag, is":        "Icy road conditions (black ice)",
    "Halt väglag, snö":       "Icy road conditions (snow)",
    "Halt väglag, snömodd":   "Icy road conditions (slush)",
    "Snöig vägbana":          "Snowy road surface",
    "Delvis snöig vägbana":   "Partially snowy road surface",
    "Risk för halka":         "Risk of slippery conditions",
    "Fri vägbana":            "Clear road surface",
    "Vägarbete":              "Roadworks",
    "Ingen information":      "No information available",
};

export function translateCondition(swedish: string): string {
    const translated = conditionTranslations[swedish];
    if (!translated) {
        console.warn(`[translateCondition] Missing translation for: "${swedish}"`);
    }

    return translated ?? swedish;
}