import type {ExplanationResponse} from "@/projects/dev-tools/types/typesGeneratorResponse.ts";

interface ExplanationResultBlockProps {
    data: ExplanationResponse;
}

const ExplanationResultBlock = ({ data }: ExplanationResultBlockProps) => {
    return (
        <div className="space-y-3 text-sm">

            {/* Summary */}
            <div className="rounded-lg border border-slate-700 bg-slate-950/60 p-4">
    <p className="mb-1.5 text-xs font-medium uppercase tracking-wide text-slate-400">Summary</p>
        <p className="leading-relaxed text-slate-200">{data.summary}</p>
        </div>

    {/* Analogy */}
    <div className="rounded-lg border border-slate-700 bg-slate-950/60 p-4">
    <p className="mb-1.5 text-xs font-medium uppercase tracking-wide text-slate-400">Analogy</p>
        <p className="leading-relaxed text-slate-300">{data.analogy}</p>
        </div>

    {/* Steps */}
            {Array.isArray(data.steps) && data.steps.length > 0 && (
                <div className="rounded-lg border border-slate-700 bg-slate-950/60 p-4">
                    <p className="mb-2 text-xs font-medium uppercase tracking-wide text-slate-400">How it works</p>
                    <ol className="space-y-2 list-decimal list-inside">
                        {data.steps.map((step, i) => (
                            <li key={i} className="leading-relaxed text-slate-300">{step}</li>
                        ))}
                    </ol>
                </div>
            )}

    {/* Gotcha */}
    <div className="rounded-lg border border-red-900/40 bg-red-950/30 p-4">
    <p className="mb-1.5 text-xs font-medium uppercase tracking-wide text-red-400">Watch out</p>
    <p className="leading-relaxed text-red-300">{data.gotcha}</p>
        </div>

    {/* Takeaways */}
            { Array.isArray(data.steps) && data.steps.length > 0 && (
                <div className="rounded-lg border border-slate-700 bg-slate-950/60 p-4">
                    <p className="mb-2 text-xs font-medium uppercase tracking-wide text-slate-400">Key takeaways</p>
                    <ul className="space-y-1.5">
                        {data.takeaways.map((t, i) => (
                            <li key={i} className="flex gap-2 leading-relaxed text-slate-300">
                                <span className="mt-0.5 text-indigo-400 shrink-0">•</span>
                                {t.replace(/^-\s*/, "")}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
    </div>
);
};

export default ExplanationResultBlock;