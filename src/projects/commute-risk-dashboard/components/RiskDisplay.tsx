import type {RiskDisplayProps} from "@/projects/commute-risk-dashboard/types/typeRisk.ts";

export const RiskDisplay = ({risk}: RiskDisplayProps) => {
   return (
       <>
           <div>
               <div className="flex flex-row">
                   <div className="flex-1 space-y-1">
                       <div>Commute Risk: <span className="font-medium">{risk.level}</span></div>
                       <p className="text-sm text-muted-foreground"> Based on current weather and your selected commute.</p>
                   </div>
                   {risk.level !== "Low" && (
                       <div className="flex-1 space-y-1 text-sm">
                           <div className="font-medium">Why this risk?</div>
                           <ul className="list-disc list-inside text-muted-foreground">
                               {risk.reasons.map((reason, index) => (
                                   <li key={index}>{reason}</li>
                               ))}
                           </ul>
                       </div>
                   )}
               </div>
               <div className="mt-4">
                   <div className="text-light">Recommendation:</div>
                   {risk.recommendations.map((rec, index) => (
                       <p key={index} className="text-muted-foreground text-sm">{rec}</p>
                   ))}
               </div>
           </div>
       </>
   )
}

export default RiskDisplay;