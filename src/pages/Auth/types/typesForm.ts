import type {ChangeEvent} from "react";

export type Phone = {
    type: string;
    number: string;
}

export type FormErrors = {
    username?: string;
    password?: string;
    firstname?:string;
    lastname?: string;
    email?: string;
}

export type FormInputProps = {
    type?: string;
    name: string;
    value: string | undefined;
    placeholder: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    error?: string;
}