import type {RiskDisplayProps} from "@/projects/commute-risk-dashboard/types/typeRisk.ts";
import { motion } from 'framer-motion';

export const RiskDisplay = ({risk}: RiskDisplayProps) => {
   return (
       <>
           <motion.div
               className="w-full space-y-4"
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.4 }}
           >

               {/* Risk Level Header */}
               <div className="flex items-start justify-between gap-4">
                   <div className="flex-1">
                       <div className="text-lg font-semibold text-gray-900 mb-1">
                           Commute Risk: <span className={`
                    ${risk.level === 'Low' ? 'text-green-600' : ''}
                    ${risk.level === 'Medium' ? 'text-yellow-600' : ''}
                    ${risk.level === 'High' ? 'text-red-600' : ''}
                `}>{risk.level}</span>
                       </div>
                       <p className="text-sm text-slate-600">
                           Based on current weather and your selected commute method
                       </p>
                   </div>
               </div>

               {/* Risk Reasons - Only show if not low risk */}
               {risk.level !== "Low" && risk.reasons.length > 0 && (
                   <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                       <div className="font-medium text-gray-900 mb-2">Why this risk level?</div>
                       <ul className="space-y-1">
                           {risk.reasons.map((reason, index) => (
                               <li key={index} className="text-sm text-slate-700 flex items-start">
                                   <span className="text-slate-400 mr-2">•</span>
                                   <span>{reason}</span>
                               </li>
                           ))}
                       </ul>
                   </div>
               )}

               {/* Recommendations */}
               <div className="bg-sky-50 rounded-lg p-4 border border-sky-200">
                   <div className="font-medium text-gray-900 mb-2">Recommendations:</div>
                   <ul className="space-y-1">
                       {risk.recommendations.map((rec, index) => (
                           <li key={index} className="text-sm text-slate-700 flex items-start">
                               <span className="text-sky-500 mr-2">→</span>
                               <span>{rec}</span>
                           </li>
                       ))}
                   </ul>
               </div>
           </motion.div>
       </>
   )
}

export default RiskDisplay;