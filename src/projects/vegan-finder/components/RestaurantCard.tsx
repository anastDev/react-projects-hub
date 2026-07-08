import type {Restaurant} from "@/projects/vegan-finder/types/typesRestaurant.ts";

interface RestaurantCardProps {
    restaurant: Restaurant;
    onRestaurantClick: (restaurant: Restaurant) => void;
}

export default function RestaurantCard({ restaurant, onRestaurantClick }: RestaurantCardProps) {
    const isVegeterian = restaurant.servesVegetarianFood;

    return (
        <article
            onClick={() => onRestaurantClick(restaurant)}
        >
            <div className="h-full rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
                <div className="mb-2 flex items-start justify-between gap-2">
                    <h2 className="text-base font-semibold leading-tight break-words sm:text-lg">
                        {restaurant.name}
                    </h2>
                    <span className="shrink-0 text-2xl" aria-hidden="true">
          {isVegeterian ? "🥗" : "🌱" }
        </span>
                </div>

                <p className="mb-3 text-sm text-gray-500">{restaurant.address}</p>

                <div className="flex items-center justify-between">
                    {restaurant.rating ? (
                        <span className="inline-flex items-center gap-1 text-sm font-medium text-amber-600">
          ⭐ {restaurant.rating.toFixed(1)}
        </span>
                    ) : (
                        <span className="inline-flex items-center gap-1 text-sm font-medium text-amber-600">
                            No rating available
                        </span>
                    )}
                    <span
                        className={
                            "rounded-full px-4 py-2 text-xs font-medium " +
                            (isVegeterian
                                ? "bg-lime-100 text-lime-700"
                                : "bg-emerald-100 text-emerald-700")
                        }
                    >
          {isVegeterian ? "Vegetarian" : "N/A"}
        </span>
                </div>
            </div>
        </article>
    );
}