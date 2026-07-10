import { useEffect } from "react";
import { X } from "lucide-react";
import type {Restaurant} from "@/projects/vegan-finder/types/typesRestaurant.ts";
import {Button} from "@/components/ui/button.tsx";
import {usePhotos} from "@/projects/vegan-finder/hooks/usePhotos.ts";
import {RestaurantMap} from "@/projects/vegan-finder/components/RestaurantMap.tsx";
import {PhotoCarousel} from "@/projects/vegan-finder/components/PhotoCarousel.tsx";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ScrollArea } from "@/components/ui/scroll-area";
import {useRestaurantDetails} from "@/projects/vegan-finder/hooks/useRestaurantMoreDetails.ts";

interface RestaurantDetailsProps {
    restaurant: Restaurant | null;
    onClose: () => void;
}

export const RestaurantDetails = ({
                                              restaurant,
                                              onClose,
                                          }: RestaurantDetailsProps)=>  {
    const {fetchPhotoUri}= usePhotos();
    const {reviews, loading} = useRestaurantDetails(restaurant?.id ?? null);

    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        document.addEventListener("keydown", handleKey);
        return () => document.removeEventListener("keydown", handleKey);
    }, [onClose]);

    useEffect(() => {
        const restaurantPhoto = restaurant?.photos?.[0]?.name;

        if(restaurantPhoto) {
            fetchPhotoUri(restaurantPhoto);
        }
    }, [restaurant]);

    if (!restaurant) return null;

    const isVegetarian = restaurant.type === "vegetarian";

    const capabilities: { key: keyof Restaurant; label: string }[] = [
        { key: "servesCoffee", label: "☕ Coffee" },
        { key: "servesBreakfast", label: "🍳 Breakfast" },
        { key: "servesBrunch", label: "🥐 Brunch" },
        { key: "servesDinner", label: "🍽️ Dinner" },
        { key: "servesCocktails", label: "🍸 Cocktails" },
    ];
    const activeCapabilities = capabilities.filter((c) => restaurant[c.key] === true);

    const PRICE_LEVEL: Record<string, string> = {
        PRICE_LEVEL_INEXPENSIVE: "$",
        PRICE_LEVEL_MODERATE: "$$",
        PRICE_LEVEL_EXPENSIVE: "$$$",
        PRICE_LEVEL_VERY_EXPENSIVE: "$$$$",
    };

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 backdrop-blur-sm"
            onClick={onClose}
            aria-label={`Details for ${restaurant.name}`}
        >
            <div
                className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl border border-gray-200 bg-white p-4 shadow-3xl dark:border-gray-700 dark:bg-gray-900 sm:p-6"
                onClick={(e) => e.stopPropagation()}
            >
                <Button
                    onClick={onClose}
                    variant="outline"
                    className="absolute right-2 top-2 z-10 rounded-lg p-1.5 mr-2 text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-700 dark:hover:bg-gray-800 dark:hover:text-gray-200 sm:right-4 sm:top-6 cursor-pointer"
                >
                    <X size={22} />
                </Button>

                {/* Details */}
                <section>
                    {/* Photo Carousel */}
                    {restaurant.photos && restaurant.photos.length > 1 && (
                        <div className="mt-6 py-4">
                            <PhotoCarousel
                                photoNames={restaurant.photos.map(p => p.name)}
                                altText={restaurant.name}
                            />
                        </div>
                    )}

                    {/* Name + address + badge */}
                    <div className="mb-3">
                        <h1 className="text-xl font-bold leading-tight sm:text-2xl">
                            {restaurant.name}
                        </h1>
                        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                            {restaurant.address}
                            <span className={
                                "inline-block rounded-full ml-2 px-3 py-1 text-xs font-medium " +
                                (isVegetarian
                                    ? "bg-lime-100 text-lime-700 dark:bg-lime-900 dark:text-lime-200"
                                    : "bg-emerald-100 text-emerald-700 dark:bg-emerald-900 dark:text-emerald-200")
                            }>
                            {isVegetarian ? "Vegetarian-Friendly" : "N/A"}
                        </span>
                        </p>
                    </div>

                    {/* Rating + open now + price */}
                    <div className="mb-4 flex flex-wrap items-center gap-3 text-sm">
                        <span className="inline-flex items-center gap-1 font-medium text-amber-600">
                            ⭐ {restaurant.rating.toFixed(1)}
                            <span className="font-normal text-gray-400 dark:text-gray-500">
                                ({restaurant.userRatingCount})
                            </span>
                        </span>

                        {restaurant.openNow !== undefined && (
                            <span className={
                                "inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-medium " +
                                (restaurant.openNow
                                    ? "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-200"
                                    : "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-200")
                            }>
                                ● {restaurant.openNow ? "Open now" : "Closed"}
                            </span>
                        )}

                        {restaurant.priceLevel && (
                            <span className="text-gray-400 dark:text-gray-500">
                {PRICE_LEVEL[restaurant.priceLevel] ?? restaurant.priceLevel}
            </span>
                        )}
                    </div>

                    {/* Good for */}
                    {activeCapabilities.length > 0 && (
                        <div className="mb-5">
                            <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-400 dark:text-gray-500">
                                Good for
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {activeCapabilities.map((c) => (
                                    <span
                                        key={c.key}
                                        className="rounded-lg bg-gray-100 px-3 py-1.5 text-sm text-gray-700 dark:bg-gray-700 dark:text-gray-200"
                                    >
                        {c.label}
                    </span>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Reviews */}
                    <Accordion type="single" collapsible className="border-gray-100 dark:border-gray-700">
                        <AccordionItem value="reviews">
                            <AccordionTrigger className="text-sm font-semibold text-gray-700 dark:text-gray-300 py-3">
                                Reviews {reviews.length > 0 && `(${reviews.length})`}
                            </AccordionTrigger>
                            <AccordionContent>
                                {loading ? (
                                    <p className="text-sm text-gray-400 animate-pulse">Loading reviews...</p>
                                ) : reviews.length === 0 ? (
                                    <p className="text-sm text-gray-400">No reviews available.</p>
                                ) : (
                                    <ScrollArea className="h-64">
                                        <div className="flex flex-col gap-4 pr-3">
                                            {reviews.map((review, index) => (
                                                <div key={index} className="border-b border-gray-100 pb-3 dark:border-gray-700 last:border-0">
                                                    <div className="flex items-center gap-2 mb-1">
                                                        {review.authorAttribution?.photoUri && (
                                                            <img
                                                                src={review.authorAttribution.photoUri}
                                                                alt={review.authorAttribution.displayName}
                                                                referrerPolicy="no-referrer"
                                                                className="h-6 w-6 rounded-full"
                                                            />
                                                        )}
                                                        <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
                                            {review.authorAttribution?.displayName}
                                        </span>
                                                        <span className="text-xs text-amber-500">
                                            {"⭐".repeat(review.rating ?? 0)}
                                        </span>
                                                        <span className="ml-auto text-xs text-gray-400">
                                            {review.relativePublishTimeDescription}
                                        </span>
                                                    </div>
                                                    {review.text?.text && (
                                                        <p className="text-sm text-gray-600 dark:text-gray-400">
                                                            {review.text.text}
                                                        </p>
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    </ScrollArea>
                                )}
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>

                    {/* Contact / links */}
                    {(restaurant.phoneNumber || restaurant.websiteUri) && (
                        <div className="flex flex-col gap-2 border-t border-gray-100 pt-4 dark:border-gray-700">
                            {restaurant.phoneNumber && (
                                <a href={`tel:${restaurant.phoneNumber}`}
                                   className="inline-flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                                    <span aria-hidden="true">📞</span> {restaurant.phoneNumber}
                                </a>
                            )}
                            {restaurant.websiteUri && (
                                <a href={restaurant.websiteUri} target="_blank"
                                   className="inline-flex items-center gap-2 text-sm text-emerald-600 dark:text-emerald-400">
                                    <span aria-hidden="true">🌐</span> Visit website
                                </a>
                            )}
                        </div>
                    )}
                </section>

                {/* Embedded Map */}
                <RestaurantMap restaurant={restaurant} />
            </div>
        </div>
    );
}

export default RestaurantDetails;