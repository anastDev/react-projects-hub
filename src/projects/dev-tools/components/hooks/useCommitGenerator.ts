import {useEffect, useState} from "react";
import type {GeneratorApiResponse} from "@/projects/dev-tools/types/typesGeneratorResponse.ts";
import {getCommitMessage} from "@/projects/dev-tools/services/api.generator.ts";

export function useCommitGenerator (prevCode: string, newCode: string, context?: string) {
    const [loading, setLoading] = useState(false)
    const [commitMessage, setCommitMessage] = useState<GeneratorApiResponse | null>(null);
    const [error, setError] = useState("");

    useEffect(() => {
        if(prevCode.trim() === "" || prevCode.trim() === "" || prevCode.trim() === "") {
            setCommitMessage(null);
            setError("");
            return;
        }

        getCommitMessage(prevCode, newCode, context)
            .then((res) => {
                setCommitMessage(res);
            })
            .catch((err) => {
                console.error(err);
                setError("Unable to generate explanation");
            })
            .finally(() => {
                setLoading(false);
            });
    }, [prevCode, newCode, context]);

    return {loading, error, commitMessage};
}