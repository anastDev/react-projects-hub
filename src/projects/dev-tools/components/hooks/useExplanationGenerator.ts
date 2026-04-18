import {useEffect, useState} from "react";
import type {ExplanationApiResponse} from "@/projects/dev-tools/types/typesGeneratorResponse.ts";
import { getExplanationCode} from "@/projects/dev-tools/services/api.generator.ts";

export function useExplanationGenerator (code: string, question: string) {
    const [loading, setLoading] = useState(false)
    const [explanation, setExplanation] = useState<ExplanationApiResponse | null>(null);
    const [error, setError] = useState("");

    console.log("hook render — loading:", loading, "explanation:", explanation, "error:", error);

    useEffect(() => {
        if(code.trim() === "" || question.trim() === "" ) {
            setExplanation(null);
            setError("");
            return;
        }

        setLoading(true);

        getExplanationCode(code, question)
            .then((res) => {
                console.log("fetch resolved with:", res);
                setExplanation(res);
            })
            .catch((err) => {
                console.error(err);
                setError("Unable to generate explanation");
            })
            .finally(() => {
                setLoading(false);
            });
    }, [code, question]);

    return {loading, error, explanation};
}