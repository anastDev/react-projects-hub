import { useMemo, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import type {Filter, Restaurant, ViewMode} from "@/projects/vegan-finder/types/typesRestaurant.ts";
import {useNavigate} from "react-router";
import RestaurantDetails from "@/projects/vegan-finder/components/RestaurantDetails.tsx";
import { ChevronLeft} from "lucide-react";
import {Button} from "@/components/ui/button.tsx";

interface ResultsPageProps {
    restaurants: Restaurant[];
}

const FILTERS: { value: Filter; label: string }[] = [
    { value: "all", label: "All" },
    { value: "vegetarian", label: "🥗 Vegetarian" },
    { value: "vegan", label: "🌱 Vegan options" },
];

export default function ResultsPage({ restaurants }: ResultsPageProps) {
    const [filter, setFilter] = useState<Filter>("all");
    const [view, setView] = useState<ViewMode>("list");
    const navigate = useNavigate();
    const [selectedRestaurant, setSelectedRestaurant] = useState<Restaurant| null>(null);

    const visible = useMemo(
        () => restaurants.filter((r) => filter === "all" || r.type === filter),
        [restaurants, filter]
    );

    return (
        <div className="min-h-screen bg-gray-50 text-gray-900">
            <header className="sticky top-0 z-20 border-b border-gray-200 bg-white/90 backdrop-blur">
                <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-3 px-4 py-3 sm:px-6">
                    <Button
                        onClick={() => navigate(-1)}
                        className="flex shrink-0 items-center gap-2 font-bold"
                        variant="ghost"
                    >
                        <span className="text-muted-foreground"><ChevronLeft/></span>
                        <span className="text-base text-muted-foreground ">Projects</span>
                    </Button>

                    <div
                        className="flex rounded-xl bg-gray-100 p-1 text-sm font-medium"
                        aria-label="Choose view"
                    >
                        {(["list", "map"] as ViewMode[]).map((mode) => {
                            const active = view === mode;
                            return (
                                <button
                                    key={mode}
                                    onClick={() => setView(mode)}
                                    aria-pressed={active}
                                    className={
                                        "rounded-lg px-4 py-2 capitalize transition-colors " +
                                        (active ? "bg-white shadow-sm" : "text-gray-500")
                                    }
                                >
                                    {mode}
                                </button>
                            );
                        })}
                    </div>
                </div>
            </header>

            <main className="mx-auto max-w-5xl px-4 py-6 sm:px-6">
                <div className="relative mb-6">
                    <div
                        className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:flex-wrap sm:px-0 sm:pb-0 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                        role="group"
                        aria-label="Filter restaurants"
                    >
                        {FILTERS.map((chip) => {
                            const active = filter === chip.value;
                            return (
                                <button
                                    key={chip.value}
                                    onClick={() => setFilter(chip.value)}
                                    aria-pressed={active}
                                    className={
                                        "shrink-0 whitespace-nowrap rounded-full border px-4 py-2 text-sm font-medium transition-colors " +
                                        (active
                                            ? "border-emerald-600 bg-emerald-600 text-white"
                                            : "border-gray-300 bg-white text-gray-600 hover:border-gray-400")
                                    }
                                >
                                    {chip.label}
                                </button>
                            );
                        })}
                    </div>
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-r from-transparent to-gray-50 sm:hidden"
                    />
                </div>

                {view === "list" &&
                    (visible.length > 0 ? (
                        <section className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            {visible.map((r) => (
                                <RestaurantCard key={r.id}
                                                restaurant={r}
                                                onRestaurantClick={setSelectedRestaurant}
                                />
                            ))}
                        </section>
                    ) : (
                        <p className="py-16 text-center text-gray-500">
                            No spots match this filter nearby.
                        </p>
                    ))}

                {view === "map" && (
                    <section>
                        <div className="flex h-[55vh] min-h-80 w-full items-center justify-center rounded-2xl border border-dashed border-gray-300 bg-white px-4 text-center text-sm text-gray-500">
                            Map goes here. Mount the Google Maps JS API and add one marker
                            per restaurant from the filtered list ({visible.length} shown).
                        </div>
                    </section>
                )}

                <RestaurantDetails
                    restaurant={selectedRestaurant}
                    onClose={() => setSelectedRestaurant(null)}
                />
            </main>
        </div>
    );
}