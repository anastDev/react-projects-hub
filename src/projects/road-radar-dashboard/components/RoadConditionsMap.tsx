import { MapContainer, TileLayer, Polyline, Marker, Popup, CircleMarker} from "react-leaflet"
import L from "leaflet"
import "leaflet/dist/leaflet.css"
import * as wellknown from "wellknown";
import type {DeviationConditions, RoadConditions} from "@/projects/road-radar-dashboard/types/typesRoadConditions.ts";
import AccidentPopup from "@/projects/road-radar-dashboard/components/AccidentPopup.tsx";

interface RoadConditionsMapProps {
    conditions: RoadConditions[]
    accidents: DeviationConditions[]
    userLat: number
    userLong: number
}

const getColor = (conditionText: string) => {
    if (conditionText === "Normalt") return "green"
    if (conditionText.includes("Halt") || conditionText.includes("Is")) return "red"
    return "orange"
}

const customIcon = L.divIcon({
    className: "",
    html: `
        <div class="marker">
            <div class="ring"></div>  
            <div class="dot"></div>  
        </div>
    `,
    iconSize: [16, 16],
    iconAnchor: [8, 8],
})

const RoadConditionsMap = ({ conditions, accidents, userLat, userLong }: RoadConditionsMapProps) => {
    return (
        <MapContainer
            center={[userLat, userLong]}
            zoom={13}
            style={{ height: "100%", width: "100%", minHeight: "500px" }}
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; OpenStreetMap contributors'
            />

            {/* User location marker */}
            <Marker position={[userLat, userLong]} icon={customIcon}>
                <Popup>You are here!</Popup>
            </Marker>

            {/* Road condition lines */}
            {conditions.map((condition, index) => {
                const geoJson = wellknown.parse(condition.Geometry!.WGS84)
                if (!geoJson || geoJson.type !== "LineString") return null

                const positions = (geoJson.coordinates as [number, number][]).map(
                    ([lng, lat]) => [lat, lng] as [number, number]
                )

                return (
                    <Polyline
                        key={`road-condition-${index}`}
                        positions={positions}
                        color={getColor(condition.ConditionText)}
                    >
                        <Popup>
                            <strong>{condition.RoadNumber}</strong> <br />
                            {condition.LocationText} <br />
                            {condition.ConditionText} <br />
                            {condition.ConditionInfo}
                        </Popup>
                    </Polyline>
                )
            })}

            {accidents.map((accident, index) => {
                const geoJson = wellknown.parse(accident.Geometry?.WGS84 as string)
                if (!geoJson || geoJson.type !== "Point") return null;

                const [lng, lat] = geoJson.coordinates as [number, number]

                return (
                    <CircleMarker
                        key={`accident-${index}`}
                        className="leaflet-accident-pulse"
                        center={[lat, lng]}
                        radius={10}
                        color="red"
                        fillColor="orange"
                        fillOpacity={0.8}
                    >
                        <Popup>
                            <AccidentPopup accident={accident}/>
                        </Popup>
                    </CircleMarker>
                )
            })}
        </MapContainer>
    )
}

export default RoadConditionsMap;