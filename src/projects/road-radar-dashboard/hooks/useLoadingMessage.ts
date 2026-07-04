import {useEffect, useState} from "react";

const loadingMessages = [
    " ⏳ Loading road data...",
    "✔️ Checking for road works nearby...",
    "🤏 Almost there...",
    "🚧 Fetching the latest traffic info...",
]

export const useLoadingMessage = (loading: boolean, intervalMs = 3000) => {
    const [index, setIndex] = useState(0)

    useEffect(() => {
        if (!loading) {
            setIndex(0)
            return
        }

        const interval = setInterval(() => {
            setIndex(prev => (prev + 1) % loadingMessages.length)
        }, intervalMs)

        return () => clearInterval(interval)
    }, [loading, intervalMs])

    return loadingMessages[index]
}