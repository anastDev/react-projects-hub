import { useMemo, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import type {Filter, Restaurant, ViewMode} from "@/projects/vegan-finder/types/typesRestaurant.ts";
import {useNavigate} from "react-router";
import RestaurantDetails from "@/projects/vegan-finder/components/RestaurantDetails.tsx";
import { ChevronLeft} from "lucide-react";
import {Button} from "@/components/ui/button.tsx";
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
import {pinIcon} from "@/projects/vegan-finder/utils/customIcon.ts";

interface ResultsPageProps {
    restaurants: Restaurant[];
}

const FILTERS: { value: Filter; label: string }[] = [
    { value: "all", label: "All" },
    { value: "vegetarian", label: "🥗 Vegetarian" },
    { value: "vegan", label: "🌱 N/A" },
];

type SortOption = "default" | "name" | "rating";

export default function ResultsPage({ restaurants }: ResultsPageProps) {
    const [filter, setFilter] = useState<Filter>("all");
    const [view, setView] = useState<ViewMode>("list");
    const [sort, setSort] = useState<SortOption>("default");
    const navigate = useNavigate();
    const [selectedRestaurant, setSelectedRestaurant] = useState<Restaurant| null>(null);

    const visible = useMemo(() => {
        const filtered = restaurants.filter((r) => filter === "all" || r.type === filter);
        if (sort === "name") return [...filtered].sort((a, b) => a.name.localeCompare(b.name));
        if (sort === "rating") return [...filtered].sort((a, b) => (b.rating ?? 0) - (a.rating ?? 0));
        return filtered;
    }, [restaurants, filter, sort]);

    return (
        <div className="min-h-screen bg-gray-50 text-gray-900">
            <header className="sticky top-0 z-20 border-b border-gray-200 bg-white/90 backdrop-blur">
                <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-3 px-4 py-3 sm:px-6">

                    {/* Back button */}
                    <Button
                        onClick={() => navigate(-1)}
                        className="flex shrink-0 items-center gap-2 font-bold"
                        variant="ghost"
                    >
                        <span className="text-muted-foreground"><ChevronLeft/></span>
                        <span className="text-base text-muted-foreground ">Projects</span>
                    </Button>

                    <div className="flex items-center gap-3">

                        {/* View toggle */}
                        <div className="flex rounded-xl bg-gray-100 p-1 text-sm font-medium">
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
                </div>
            </header>

            <main className="mx-auto max-w-5xl px-4 py-6 sm:px-6">
                    <div className="relative mb-4">
                        <div className="flex items-center gap-2">
                            {/* Filter chips */}
                            <div
                                className="-mx-4 flex flex-1 gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:flex-wrap sm:px-0 sm:pb-0 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
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
                                                "shrink-0 rounded-xl border px-4 py-2 text-sm font-medium shadow-sm transition-colors " +
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

                            {/* Sort dropdown */}
                            <select
                                value={sort}
                                onChange={(e) => setSort(e.target.value as SortOption)}
                                className="shrink-0 rounded-xl font-medium border border-gray-200 bg-white px-3 py-2 text-sm text-gray-600 shadow-sm focus:outline-none dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300"
                            >
                                <option value="default">Nearest</option>
                                <option value="rating">Top rated</option>
                                <option value="name">A–Z</option>
                            </select>
                        </div>

                        <div
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

                {view === "map" && visible.length > 0 && (
                    <div className="relative h-[70vh] min-h-80 w-full overflow-hidden rounded-2xl shadow-md">
                        <MapContainer
                            key={restaurants[0].id}
                            center={[restaurants[0].latitude, restaurants[0].longitude]}
                            zoom={14}
                            className="h-full w-full shadow-md"
                            zoomControl={false}
                        >
                            <TileLayer
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                attribution='&copy; OpenStreetMap contributors'
                            />2
                            {restaurants.map((r) => (
                                <Marker key={r.id}
                                        position={[r.latitude, r.longitude]}
                                        icon={pinIcon(r.openNow)}
                                >
                                    <Popup>
                                        <div className="min-w-[10rem]">
                                            <div className="font-semibold mb-2">{r.name}</div>
                                            <span className="text-xs text-gray-600">{r.address}</span>
                                            <div className="text-xs mt-3">
                                                ⭐ {r.rating?.toFixed(1)}
                                                <span className="pl-1 text-gray-400 dark:text-gray-500">
                ({r.userRatingCount})
              </span>
                                                {r.openNow !== undefined && (
                                                    <span className={`${r.openNow ? "text-green-600" : "text-red-600"} ml-2`}>
                                            ● {r.openNow ? "Open" : "Closed"}
                                        </span>
                                                )}
                                            </div>
                                            <p>
                                                <a
                                                    href={r.websiteUri}
                                                    target="_blank"
                                                    className="mt-2 text-sm font-medium no-underline hover:underline cursor-pointer"
                                                >
                                                    Go to their website
                                                </a>
                                            </p>
                                        </div>
                                    </Popup>
                                </Marker>
                            ))}
                        </MapContainer>
                    </div>
                )}

                <RestaurantDetails
                    restaurant={selectedRestaurant}
                    onClose={() => setSelectedRestaurant(null)}
                />
            </main>
        </div>
    );
}