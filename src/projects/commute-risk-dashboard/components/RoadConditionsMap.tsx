import { MapContainer, TileLayer, Polyline, Marker, Popup, CircleMarker} from "react-leaflet"
import L from "leaflet"
import "leaflet/dist/leaflet.css"
import * as wellknown from "wellknown";
import type {DeviationConditions, RoadConditions} from "@/projects/commute-risk-dashboard/types/typesRoadConditions.ts";

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
                            <div style={{ minWidth: "180px", fontFamily: "sans-serif" }}>

                                <strong style={{ fontSize: "13px", color: "#dc2626", display: "block", marginBottom: "4px" }}>
                                    {accident.Header}
                                </strong>

                                <span style={{
                                    display: "inline-block",
                                    backgroundColor: "#fef3c7",
                                    color: "#92400e",
                                    fontSize: "11px",
                                    fontWeight: "bold",
                                    padding: "2px 6px",
                                    borderRadius: "4px",
                                    marginBottom: "6px"
                                }}>
            {accident.MessageType}
        </span>
                                {accident.Message && (
                                    <p style={{ fontSize: "12px", color: "#334155", margin: "0 0 6px 0", lineHeight: "1.4" }}>
                                        {accident.Message}
                                    </p>
                                )}

                                <div style={{ fontSize: "11px", color: "#94a3b8", borderTop: "1px solid #e2e8f0", paddingTop: "4px" }}>
                                    {accident.RoadName && <span>{accident.RoadName} </span>}
                                    {accident.RoadNumber && <span>({accident.RoadNumber})</span>}
                                </div>

                                {accident.StartTime && (
                                    <div style={{ fontSize: "10px", color: "#94a3b8", marginTop: "3px" }}>
                                        Since: {new Date(accident.StartTime).toLocaleDateString("en-GB", {
                                        day: "numeric", month: "short", hour: "2-digit", minute: "2-digit"
                                    })}
                                    </div>
                                )}
                            </div>
                        </Popup>
                    </CircleMarker>
                )
            })}
        </MapContainer>
    )
}

export default RoadConditionsMap;