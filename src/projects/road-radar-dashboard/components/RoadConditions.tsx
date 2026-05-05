import {Spinner} from "@radix-ui/themes";
import {translateCondition} from "@/projects/road-radar-dashboard/utils/translations.ts";
import {getSeverity, severityConfig} from "@/projects/road-radar-dashboard/utils/roadConditionUtils.ts";
import type {RoadConditions} from "@/projects/road-radar-dashboard/types/typesRoadConditions.ts";

interface RoadConditionsProps {
    conditions: RoadConditions[];
    loading: boolean;
    error: string | null;
}

const RoadCondition = ({ conditions, loading, error }: RoadConditionsProps) => {
    if (loading) return <Spinner size="3" />;
    if (error)   return <p className="text-xs text-slate-500">{error}</p>;

    if (conditions.length === 0) return (
        <p className="text-xs text-slate-500 text-center py-4">
            No road conditions reported nearby.
        </p>
    );

    const grouped = {
        High:   conditions.filter(c => getSeverity(c.ConditionText) === "High"),
        Medium: conditions.filter(c => getSeverity(c.ConditionText) === "Medium"),
        Low:    conditions.filter(c => getSeverity(c.ConditionText) === "Low"),
    };

    return (
        <div className="space-y-4">

            {/* Summary grid — always visible above the scroll area */}
            <div className="grid grid-cols-3 gap-2">
                {(["High", "Medium", "Low"] as const).map((level, i) => (
                    <div
                        key={`summary-${level}-${i}`}
                        className={`rounded-xl p-3 text-center border ${severityConfig[level].card}`}
                    >
                        <div className={`text-xl font-black ${severityConfig[level].text}`}>
                            {grouped[level].length}
                        </div>
                        <div className="text-xs text-slate-500 mt-0.5">
                            {severityConfig[level].label}
                        </div>
                    </div>
                ))}
            </div>

            {/*
                Scrollable list
            */}
            <div className="conditions-scroll max-h-[420px] overflow-y-auto space-y-4 pr-1">
                {(["High", "Medium", "Low"] as const).map((level, i) => (
                    grouped[level].length > 0 && (
                        <div key={`group-${level}-${i}`} className="space-y-2">

                            <p className={`text-xs font-semibold uppercase tracking-widest ${severityConfig[level].text}`}>
                                {severityConfig[level].label}
                            </p>

                            {grouped[level].map((condition, i) => (
                                <div
                                    key={`condition-${level}-${i}`}
                                    className="bg-slate-800/40 border border-slate-700 rounded-xl px-4 py-3"
                                >
                                    <div className="flex items-center justify-between mb-1">
                                        <span className="text-sm font-bold text-gray-100">
                                            Road {condition.RoadNumber}
                                        </span>
                                        <span className={`text-xs px-2 py-0.5 rounded-full border font-medium ${severityConfig[level].card} ${severityConfig[level].text}`}>
                                            {translateCondition(condition.ConditionText)}
                                        </span>
                                    </div>

                                    <p className="text-xs text-slate-500">
                                        {condition.LocationText}
                                    </p>

                                    {/*
                                        ConditionInfo can come back as an array from the API,
                                        so we join it into a readable string before translating.
                                    */}
                                    {condition.ConditionInfo && (
                                        <p className="text-xs text-slate-600 mt-1">
                                            {translateCondition(
                                                Array.isArray(condition.ConditionInfo)
                                                    ? condition.ConditionInfo.join(", ")
                                                    : condition.ConditionInfo
                                            )}
                                        </p>
                                    )}
                                </div>
                            ))}
                        </div>
                    )
                ))}
            </div>
        </div>
    );
};

export default RoadCondition;