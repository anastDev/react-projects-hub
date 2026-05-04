import { useState } from "react"

const VITE_BASE_URL = import.meta.env.VITE_BASE_URL

export const useTranslation = (original: Record<string, string>) => {
    const [translated, setTranslated] = useState<Record<string, string> | null>(null)
    const [loading, setLoading] = useState(false)
    const [showingEnglish, setShowingEnglish] = useState(false)

    const toggle = async () => {
        if (showingEnglish) {
            setShowingEnglish(false)
            return
        }

        if (!translated) {
            setLoading(true)
            try {
                const entries = await Promise.all(
                    Object.entries(original).map(async ([key, value]) => {
                        const response = await fetch(`${VITE_BASE_URL}/translate`, {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify({ text: value }),
                        })
                        const data = await response.json()
                        return [key, data.translatedText] as [string, string]
                    })
                )
                setTranslated(Object.fromEntries(entries))
            } catch (err) {
                console.error("Translation error:", err)
            } finally {
                setLoading(false)
            }
        }

        setShowingEnglish(true)
    }

    const display = showingEnglish && translated ? translated : original

    return { display, loading, toggle, showingEnglish }
}