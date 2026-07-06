import { MapContainer, TileLayer, Polyline, Marker, Popup, CircleMarker} from "react-leaflet"
import L from "leaflet"
import {Polygon } from "react-leaflet";
import "leaflet/dist/leaflet.css"
import * as wellknown from "wellknown";
import type {DeviationConditions, RoadConditions} from "@/projects/road-radar-dashboard/types/typesRoadConditions.ts";
import AccidentPopup from "@/projects/road-radar-dashboard/components/AccidentPopup.tsx";
import RoadWorkPopup from "@/projects/road-radar-dashboard/components/RoadWorkPopUp.tsx";
import { Spinner } from "@/components/ui/spinner"
import {useLoadingMessage} from "@/projects/road-radar-dashboard/hooks/useLoadingMessage.ts";
import {AnimatePresence, motion} from "framer-motion";

interface RoadConditionsMapProps {
    conditions: RoadConditions[]
    accidents: DeviationConditions[]
    userLat: number
    userLong: number
    loading: boolean
}

const getColor = (conditionText: string) => {
    if(!conditionText) return "gray";
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

const RoadConditionsMap = ({ conditions, accidents, userLat, userLong, loading }: RoadConditionsMapProps) => {
    const roadWorks = accidents.filter(d =>
        d.MessageTypeValue === "MaintenanceWorks" ||
        d.MessageTypeValue === "RoadOrCarriagewayOrLaneManagement"
    );
    const actualAccidents = accidents.filter(d =>
        d.MessageTypeValue !== "MaintenanceWorks" &&
        d.MessageTypeValue !== "RoadOrCarriagewayOrLaneManagement"
    );

    const loadingMessage = useLoadingMessage(loading);

    return (
        <div style={{ position: "relative", height: "100%", width: "100%", minHeight: "500px" }}>
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
                    if (!condition.Geometry?.WGS84) return [];
                    const geoJson = wellknown.parse(condition.Geometry.WGS84);
                    if (!geoJson || geoJson.type !== "LineString") return [];

                    const positions = (geoJson.coordinates as [number, number][]).map(
                        ([lng, lat]) => [lat, lng] as [number, number]
                    )

                    return (
                        <Polyline
                            key={`road-condition-${index}`}
                            positions={positions}
                            color={getColor(condition.ConditionText!)}
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

                {actualAccidents.map((accident, index) => {
                    if (!accident.Geometry?.WGS84) return null

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

                {roadWorks.map((work, index) => {
                    if (!work.Geometry?.WGS84) return [];
                    const raw = work.Geometry?.WGS84;
                    if (!raw) return [];

                    const geoJson = wellknown.parse(raw as string);
                    if (!geoJson) return [];

                    if (geoJson.type === "Polygon") {
                        const positions = (geoJson.coordinates[0] as [number, number][]).map(
                            ([lng, lat]) => [lat, lng] as [number, number]
                        )
                        return (
                            <Polygon key={`roadwork-${index}`} positions={positions} color="orange" fillColor="orange" fillOpacity={0.3} dashArray="8 4">
                                <Popup><RoadWorkPopup deviation={work} /></Popup>
                            </Polygon>
                        )
                    }

                    if (geoJson.type === "LineString") {
                        const positions = (geoJson.coordinates as [number, number][]).map(
                            ([lng, lat]) => [lat, lng] as [number, number]
                        )
                        return (
                            <Polyline
                                key={`roadwork-${index}`}
                                positions={positions}
                                color="orange"
                                weight={5}
                                dashArray="8 4"
                            >
                                <Popup>
                                    <RoadWorkPopup deviation={work} />
                                </Popup>
                            </Polyline>
                        )
                    }


                    if (geoJson.type === "Point") {
                        const [lng, lat] = geoJson.coordinates as [number, number]
                        return (
                            <CircleMarker
                                key={`roadwork-point-${index}`}
                                center={[lat, lng]}
                                radius={8}
                                color="orange"
                                fillColor="orange"
                                fillOpacity={0.7}
                            >
                                <Popup>
                                    <RoadWorkPopup deviation={work} />
                                </Popup>
                            </CircleMarker>
                        )
                    }
                    return []
                })}
            </MapContainer>

            {loading && (
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        zIndex: 1000,
                        backdropFilter: "blur(6px)",
                        WebkitBackdropFilter: "blur(6px)",
                        backgroundColor: "rgba(2, 6, 23, 0.4)",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "12px",
                    }}
                >
                    <Spinner className="size-6" />
                    <AnimatePresence mode="wait">
                        <motion.p
                            key={loadingMessage}
                            className="text-sm text-slate-300"
                            initial={{ opacity: 0, y: 4 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -4 }}
                            transition={{ duration: 0.3 }}
                        >
                            {loadingMessage}
                        </motion.p>
                    </AnimatePresence>
                </div>
            )}
        </div>
    )
}

export default RoadConditionsMap;