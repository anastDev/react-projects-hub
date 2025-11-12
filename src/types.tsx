import type {ReactNode, RefObject} from "react";

export type TaskProps = {
    id: number;
    text: string;
    completed: boolean;
}

export type TaskListProps = {
    tasks: TaskProps[];
    editTask: (id: number, newText: string) => void;
    deleteTask: (id: number) => void;
    toggleTask: (id: number) => void;
}

export type ButtonProps = {
    onClick?: () => void;
    addClasses?: string;
    label: string;
    disabled?: boolean;
}

export type IconButtonProps = {
    onClick?: () => void;
    disabled?: boolean;
    addClasses?: string;
    icon: ReactNode;
}

export type TaskFormProps = {
    addTask: (text: string) => void;
    inputRef: RefObject<HTMLInputElement | null>;
}

export type TaskStatusProps = {
    total: number;
    active: number;
    completed: number;
}