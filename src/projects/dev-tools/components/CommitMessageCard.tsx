import {useState} from "react";
import {
    Card,
    CardContent, CardDescription, CardHeader, CardTitle, CardFooter,
} from "@/components/ui/card";
import {
    Field,
    FieldLabel,
    FieldDescription,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import CodeField from "@/projects/dev-tools/components/CodeField.tsx";
import ActionButton from "@/projects/dev-tools/components/ui/ActionButton.tsx";
import CommitMessageResultBlock from "@/projects/dev-tools/components/CommitMessageResultBlock.tsx";
import type {Status} from "@/projects/dev-tools/types/typesStatus.ts";
import {useCommitGenerator} from "@/projects/dev-tools/components/hooks/useCommitGenerator.ts";


const CommitMessageCard = () => {
    const [prevCode, setPrevCode] = useState("");
    const [newCode, setNewCode] = useState("");
    const [fileName, setFileName] = useState("");
    const [submittedfileName, setSubmittedFileName] = useState("");
    const [submittedprevCode, setSubmittedprevCode] = useState("");
    const [submittedNewCode, setSubmittedNewCode] = useState("");
    const {loading, error, commitMessage} = useCommitGenerator(submittedNewCode, submittedprevCode, submittedfileName);

    const status: Status = loading ? "loading" : error ? "error" : commitMessage ? "success" : "idle";

    const handleGenerate = async () => {
        if(prevCode.trim() !== "" || newCode.trim() !== "") {
            setSubmittedNewCode(newCode);
            setSubmittedprevCode(prevCode);
            setSubmittedFileName(fileName);
        }
    };

    return (
        <>
            <Card className="w-full self-start border-0 bg-slate-900/60 shadow-xl backdrop-blur">
                <CardHeader>
                    <CardTitle className="text-base font-semibold text-slate-100">Commit Message Generator</CardTitle>
                    <CardDescription className="mt-1 text-base text-slate-400"> Stop writing 'fix stuff' at 2am. Paste before and after to get a real conventional commit.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6 p-5 sm:p-7">
                    <Field>
                        <FieldLabel className="text-xs font-medium uppercase tracking-wide text-slate-400">File Name</FieldLabel>
                        <Input
                            id="fileName"
                            value={fileName}
                            placeholder="Enter the file where the change is"
                            className="border-slate-700 bg-slate-950/60 font-mono text-sm text-slate-100 placeholder:text-slate-600 focus-visible:ring-indigo-500"
                            onChange={(e) => setFileName(e.target.value)}
                        />
                        <FieldDescription></FieldDescription>
                    </Field>
                    <CodeField
                        id="prev-code"
                        label="Previous code"
                        placeholder="// paste the code before your changes"
                        value={prevCode}
                        onChange={setPrevCode}
                    />
                    <CodeField
                        id="new-code"
                        label="New code"
                        placeholder="// paste the code after your changes"
                        value={newCode}
                        onChange={setNewCode}
                    />
                    <CardFooter>
                        <ActionButton
                            label="Generate commit message"
                            onClick={handleGenerate}
                            status={status}
                            accent="indigo"
                        />

                        {(status === "success" || status === "error") && (
                            <CommitMessageResultBlock status={status} content={commitMessage?.data ?? error} />
                        )}
                    </CardFooter>
                </CardContent>
            </Card>
        </>
    )
}

export default CommitMessageCard;