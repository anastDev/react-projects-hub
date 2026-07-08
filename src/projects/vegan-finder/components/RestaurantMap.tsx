import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
import type {Restaurant} from "@/projects/vegan-finder/types/typesRestaurant.ts";

interface MapContainerProps {
    restaurant: Restaurant;
}

export const RestaurantMap = ({restaurant}: MapContainerProps) => {
    return (
        <section className="mb-6 pt-12">
            <div className="relative h-56 w-full overflow-hidden rounded-2xl shadow-md sm:h-70">
                <MapContainer
                    center={[restaurant.latitude, restaurant.longitude]}
                    zoom={15}
                    className="h-full w-full"
                    zoomControl={false}
                >
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[restaurant.latitude, restaurant.longitude]}>
                        <Popup>
                            <div className="font-medium">{restaurant.name} is here :)</div>
                        </Popup>
                    </Marker>
                </MapContainer>
            </div>
        </section>
    )
}

export default RestaurantMap;