import type {RestaurantApiResponse} from "@/projects/vegan-finder/types/typesResponse.ts";
import type {Restaurant} from "@/projects/vegan-finder/types/typesRestaurant.ts";

export function mapRestaurant(api: RestaurantApiResponse): Restaurant {
    return {
        id: api.id,
        name: api.displayName?.text ?? "Unknown",
        address: api.formattedAddress,
        latitude: api.location.latitude,
        longitude: api.location.longitude,
        rating: api.rating,
        userRatingCount: api.userRatingCount,
        websiteUri: api.websiteUri || undefined,
        photos: api.photos ?? [],
        priceLevel: api.priceLevel || undefined,
        openNow: api.currentOpeningHours?.openNow,
        phoneNumber: api.nationalPhoneNumber,
        servesVegetarianFood: api.servesVegetarianFood,
        servesCoffee: api.servesCoffee,
        servesBreakfast: api.servesBreakfast,
        servesBrunch: api.servesBrunch ?? undefined,
        servesCocktails: api.servesCocktails,
        servesDinner: api.servesDinner,
        type: api.servesVegetarianFood ? "vegetarian" : "vegan",
    };
}