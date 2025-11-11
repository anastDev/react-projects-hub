import type {RefObject} from "react";

export type TaskProps = {
    id: number;
    text: string;
    completed: boolean;
}

export type ButtonProps = {
    onClick?: () => void;
    addClasses?: string;
    label: string;
    disabled?: boolean;
}

export type TaskFormProps = {
    addTask: (text: string) => void;
    inputRef: RefObject<HTMLInputElement | null>;
}