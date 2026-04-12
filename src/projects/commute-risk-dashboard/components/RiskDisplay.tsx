import type {CommuteType, RiskResponse} from "@/projects/commute-risk-dashboard/types/typeRisk.ts";
import { motion } from 'framer-motion';

interface RiskDisplayProps {
    risk: RiskResponse;
    commute: CommuteType;
    riskTextClass: string;
    riskCardClass: string;
}

export const RiskDisplay = ({ risk, riskTextClass, riskCardClass }: RiskDisplayProps) => {
    return (
        <motion.div
            className={`border rounded-2xl p-6 ${riskCardClass}`}
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
        >
            <div className="flex items-center justify-between mb-5">
                <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                    Risk level
                </p>
                <span className={`text-2xl font-black ${riskTextClass}`}>
                    {risk.level}
                </span>
            </div>

            {risk.level !== "Low" && risk.reasons.length > 0 && (
                <div className="space-y-2 mb-4">
                    {risk.reasons.map((reason, i) => (
                        <div key={i} className="flex items-start gap-2 text-sm text-slate-300">
                            <span className={`mt-0.5 shrink-0 text-xs ${riskTextClass}`}>▸</span>
                            {reason}
                        </div>
                    ))}
                </div>
            )}

            {risk.recommendations.length > 0 && (
                <>
                    <div className="border-t border-slate-700/40 pt-4 space-y-2">
                        {risk.recommendations.map((rec, i) => (
                            <div key={i} className="flex items-start gap-2 text-sm text-slate-400">
                                <span className="shrink-0 mt-0.5">💡</span>
                                {rec}
                            </div>
                        ))}
                    </div>
                </>
            )}
        </motion.div>
    );
};

export default RiskDisplay;