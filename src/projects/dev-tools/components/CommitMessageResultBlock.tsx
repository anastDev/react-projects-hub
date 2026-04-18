import { Card, CardContent } from "@/components/ui/card";
import type {Status} from "@/projects/dev-tools/types/typesStatus.ts";

interface CommitMessageResultBlockProps {
    status: Status;
    content: string;
}

const CommitMessageResultBlock = ({ status, content }: CommitMessageResultBlockProps)=>  {
    const isError = status === "error";

    return (
        <Card
            className={
                isError
                    ? "border-red-900/60 bg-red-950/40"
                    : "border-slate-700 bg-slate-950/60"
            }
        >
            <CardContent className="p-4">
                <div className="mb-2 text-xs font-medium uppercase tracking-wide text-slate-200/90">
                    {isError ? "Error" : "Result"}
                </div>
                <div
                    className={`font-mono text-xs leading-relaxed sm:text-sm ${
                        isError ? "text-red-300" : "text-slate-200"
                    }`}
                >
          {content}
        </div>
            </CardContent>
        </Card>
    );
}

export default CommitMessageResultBlock;