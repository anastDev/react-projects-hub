import { useState } from "react";
import {Button} from "@/components/ui/button.tsx";

interface WelcomePageProps {
    onLocationFound: (coords: { lat: number; lng: number }) => void;
}

export default function WelcomePage({ onLocationFound }: WelcomePageProps) {
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState("");

    const handleSearch = () => {
        if (!("geolocation" in navigator)) {
            setStatus("Your browser doesn't support location lookup.");
            return;
        }

        setLoading(true);
        setStatus("Getting your location…");

        navigator.geolocation.getCurrentPosition(
            (pos) => {
                const { latitude, longitude } = pos.coords;
                onLocationFound({ lat: latitude, lng: longitude });
            },
            (err) => {
                setLoading(false);
                setStatus(
                    err.code === err.PERMISSION_DENIED
                        ? "Location permission denied. Enable it to search nearby."
                        : "Couldn't get your location. Try again."
                );
            },
            { enableHighAccuracy: false, timeout: 10000 }
        );
    };

    return (
        <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-emerald-50 to-green-100 px-4 py-12 text-gray-900 sm:px-6">

            <section className="w-full max-w-md text-center">
                <div className="mb-6 text-6xl sm:text-7xl">
                    🌱
                </div>

                <h1 className="mb-3 text-3xl font-bold tracking-tight sm:text-4xl">
                    VeganFinder
                </h1>

                <p className="mb-8 text-base text-gray-600 sm:text-lg">
                    Find vegan and vegetarian restaurants near you. One tap, no fuss.
                </p>

                <Button
                    onClick={handleSearch}
                    disabled={loading}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-emerald-600 p-6 text-lg font-semibold text-white shadow-lg transition-all duration-200 hover:scale-105 hover:bg-emerald-700 focus:outline-none focus:ring-4 focus:ring-emerald-300 cursor-pointer disabled:opacity-60"
                >
                    <span>📍</span>
                    {loading ? "Searching…" : "Find food near me"}
                </Button>

                <p
                    role="status"
                    className="mt-4 min-h-6 text-sm text-gray-500"
                >
                    {status}
                </p>

                <p className="mt-8 text-xs leading-relaxed text-gray-400/85">
                    Results use Google's vegetarian-friendly data. Always confirm vegan
                    options directly with the restaurant.
                </p>
            </section>
        </main>
    );
}