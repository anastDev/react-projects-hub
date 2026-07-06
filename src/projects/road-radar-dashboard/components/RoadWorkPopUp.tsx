import {useTranslation} from "@/projects/road-radar-dashboard/hooks/useTranslate.ts";
import type {DeviationConditions} from "@/projects/road-radar-dashboard/types/typesRoadConditions.ts";

const RoadWorkPopup = ({ deviation }: { deviation: DeviationConditions }) => {
    const { display, loading, toggle, showingEnglish } = useTranslation({
        header: deviation.Header ?? "",
        messageType: deviation.MessageType ?? "",
        message: deviation.Message ?? "",
        impact: deviation.SeverityText ?? "",
    })

    return (
        <div style={{ minWidth: "180px", fontFamily: "sans-serif" }}>
            <strong style={{ fontSize: "13px", color: "#f97316", display: "block", marginBottom: "4px" }}>
                🚧 {display.header || "Vägarbete"}
            </strong>

            <span style={{
                display: "inline-block",
                backgroundColor: "#fff7ed",
                color: "#c2410c",
                fontSize: "11px",
                fontWeight: "bold",
                padding: "2px 6px",
                borderRadius: "4px",
                marginBottom: "6px"
            }}>
                {display.messageType}
            </span>

            {deviation.SeverityText && (
                <p className="" style={{ fontSize: "11px", color: "#94a3b8", marginBottom: "3px" }}>
                    Impact: {display.impact}
                </p>
            )}

            {deviation.NumberOfLanesRestricted && (
                <p style={{ fontSize: "11px", color: "#94a3b8", marginBottom: "4px" }}>
                    Lanes restricted: {deviation.NumberOfLanesRestricted}
                </p>
            )}

            {display.message && (
                <p style={{ fontSize: "12px", color: "#334155", margin: "0 0 6px 0", lineHeight: "1.4" }}>
                    {display.message}
                </p>
            )}

            <div style={{ fontSize: "11px", color: "#94a3b8", borderTop: "1px solid #e2e8f0", paddingTop: "4px" }}>
                {deviation.RoadName && <span>{deviation.RoadName} </span>}
                {deviation.RoadNumber && <span>({deviation.RoadNumber})</span>}
            </div>

            {deviation.Suspended && (
                <p style={{ fontSize: "10px", color: "#94a3b8", marginTop: "4px" }}>
                    ⏸ Currently suspended
                </p>
            )}

            <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "6px" }}>
                <button
                    onClick={toggle}
                    disabled={loading}
                    style={{
                        fontSize: "10px",
                        color: loading ? "#94a3b8" : "#3b82f6",
                        background: "none",
                        border: "1px solid currentColor",
                        borderRadius: "4px",
                        cursor: loading ? "not-allowed" : "pointer",
                        padding: "2px 6px",
                        fontWeight: "bold",
                    }}
                >
                    {loading ? "..." : showingEnglish ? "SV" : "EN"}
                </button>
            </div>
        </div>
    )
}

export default RoadWorkPopup;