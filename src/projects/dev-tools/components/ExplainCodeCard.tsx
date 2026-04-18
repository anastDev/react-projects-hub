import {useState} from "react";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card.tsx";
import {
    Field,
    FieldLabel,
    FieldDescription,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import CodeField from "@/projects/dev-tools/components/CodeField.tsx";
import ActionButton from "@/projects/dev-tools/components/ui/ActionButton.tsx";
import CommitMessageResultBlock from "@/projects/dev-tools/components/CommitMessageResultBlock.tsx";
import {useExplanationGenerator} from "@/projects/dev-tools/components/hooks/useExplanationGenerator.ts";
import type {Status} from "@/projects/dev-tools/types/typesStatus.ts";
import ExplanationResultBlock from "@/projects/dev-tools/components/ExplanationResultBlock.tsx";


const ExplainCodeCard = ()=>  {
    const [code, setCode] = useState("");
    const [question, setQuestion] = useState("");
    const [submittedQuestion, setSubmittedQuestion] = useState("");
    const [submittedCode, setSubmittedCode] = useState("");
    const {explanation, loading, error} = useExplanationGenerator(submittedCode, submittedQuestion);

    const status: Status = loading ? "loading" : error ? "error" : explanation ? "success" : "idle";

    const handleExplain = ()=>  {
        if(code.trim() !== "" && question.trim() !== ""){
            setSubmittedCode(code);
            setSubmittedQuestion(question);
        }
    }

    return (
        <Card className="w-full self-start border-0 bg-slate-900/60 shadow-xl backdrop-blur">
                <CardHeader>
                    <CardTitle className="text-base font-semibold text-slate-100">Code Explainer</CardTitle>
                    <CardDescription className="mt-1 text-base text-slate-400">That snippet you almost copy-pasted? Understand it first. No question too small.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6 p-5 sm:p-7">
                    <Field>
                        <FieldLabel className="text-xs font-medium uppercase tracking-wide text-slate-400">Question</FieldLabel>
                        <Input
                            id="question"
                            type="text"
                            value={question}
                            placeholder="e.g. why is this using reduce instead of map?"
                            className="border-slate-700 bg-slate-950/60 font-mono text-sm text-slate-100 placeholder:text-slate-600 focus-visible:ring-indigo-500"
                            onChange={(e) => setQuestion(e.target.value)}
                        />
                        <FieldDescription></FieldDescription>
                    </Field>
                    <CodeField
                        label="Code"
                        placeholder="// paste the code you want explained"
                        value={code}
                        onChange={setCode}
                    />
            <CardFooter>
                <ActionButton
                    label="Explain"
                    onClick={handleExplain}
                    status={status}
                    accent="indigo"
                />
                {status === "success" && explanation?.data && (
                    <ExplanationResultBlock data={explanation.data} />
                )}

                {(status === "error") && (
                    <CommitMessageResultBlock status={status} content={error} />
                )}
            </CardFooter>
                </CardContent>
        </Card>
    );
}

export default ExplainCodeCard;