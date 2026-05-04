import type {DeviationConditions} from "@/projects/commute-risk-dashboard/types/typesRoadConditions.ts";
import {useTranslation} from "@/projects/commute-risk-dashboard/hooks/useTranslate.ts";

interface AccidentPopupProps {
    accident: DeviationConditions
}const AccidentPopup = ({ accident }: AccidentPopupProps) => {
    const { display, loading, toggle, showingEnglish } = useTranslation({
        header: accident.Header ?? "",
        messageType: accident.MessageType ?? "",
        message: accident.Message ?? "",
    })

    return (
        <div style={{ minWidth: "180px", fontFamily: "sans-serif" }}>

            {/* Each field reads from display, which automatically switches
                between Swedish and English depending on toggle state */}
            <strong style={{ fontSize: "13px", color: "#dc2626", display: "block", marginBottom: "4px" }}>
                {display.header}
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
                {display.messageType}
            </span>

            {display.message && (
                <p style={{ fontSize: "12px", color: "#334155", margin: "0 0 6px 0", lineHeight: "1.4" }}>
                    {display.message}
                </p>
            )}

            <div style={{ fontSize: "11px", color: "#94a3b8", borderTop: "1px solid #e2e8f0", paddingTop: "4px" }}>
                {accident.RoadName && <span>{accident.RoadName} </span>}
                {accident.RoadNumber && <span>({accident.RoadNumber})</span>}
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "6px" }}>
                {accident.StartTime && (
                    <div style={{ fontSize: "10px", color: "#94a3b8" }}>
                        Since: {new Date(accident.StartTime).toLocaleDateString("en-GB", {
                        day: "numeric", month: "short", hour: "2-digit", minute: "2-digit"
                    })}
                    </div>
                )}

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

export default AccidentPopup;