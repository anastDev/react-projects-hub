import type {ChangeEvent} from "react";

export type FormErrors = {
    username?: string;
    password?: string;
    firstname?:string;
    lastname?: string;
    email?: string;
    area?: string;
    street?: string;
    number?: string;
    po?:string;
    municipality?: string;
    phoneType?: string;
    phoneNumber?: string;
}

export type Options = {
    value: string;
    label: string;
}

export type FormInputProps = {
    type: string;
    label: string;
    name: string;
    value: string | undefined;
    placeholder: string;
    onChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
    options?: Options[];
    required: boolean;
}