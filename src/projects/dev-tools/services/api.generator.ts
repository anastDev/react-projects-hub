import type {
    CommitApiResponse,
    ExplanationApiResponse,
} from "@/projects/dev-tools/types/typesGeneratorResponse.ts";

const VITE_BASE_URL = import.meta.env.VITE_BASE_URL;

export async function getCommitMessage(prevCode: string, newCode: string, context?: string) : Promise<CommitApiResponse> {
    try {
        if (prevCode.trim() === "" || newCode.trim() === "") {
            throw new Error("Previous and new code are required.");
        }

        if(context?.trim() === "") {
            throw new Error("Some context/file name is required.");
        }

        const res = await fetch(`${VITE_BASE_URL}/generator`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({prevCode: prevCode, newCode: newCode, context: context}),
        });

        if (!res.ok) {
            console.error("Error while fetching commit message.");
        }

        return await res.json();
    } catch(err) {
        console.error(err);
        throw err;
    }
}

export async function getExplanationCode(code: string, question:string) : Promise<ExplanationApiResponse> {
    try {
        if (code.trim() === "" || question.trim() === "") {
            throw new Error("Code and question are required.");
        }

        const res = await fetch(`${VITE_BASE_URL}/generator/explain`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({code: code, question: question}),
        });

        if (!res.ok) {
            throw new Error("Error while fetching explanation.");
        }

        if(res.status === 503) {
            throw new Error("This model is currently experiencing high demand. Spikes in demand are usually temporary. Please try again later.")
        }

        return await res.json();
    } catch(err) {
        console.error(err);
        throw err;
    }
}