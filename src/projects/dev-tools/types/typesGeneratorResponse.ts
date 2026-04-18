export interface ExplanationResponse {
    summary: string;
    analogy: string;
    steps: string[];
    gotcha: string;
    takeaways: string[];
}

export interface GeneratorApiResponse < T = string>{
    message: string;
    data: T;
}

export type CommitApiResponse = GeneratorApiResponse<string>;
export type ExplanationApiResponse = GeneratorApiResponse<ExplanationResponse>;

