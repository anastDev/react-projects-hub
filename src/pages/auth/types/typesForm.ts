import type {UseFormRegister} from "react-hook-form";
import type {User} from "@/schemas/user.schema.ts";

export interface FormErrors {
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

export interface Options {
    value: string;
    label: string;
}

export interface FormInputProps {
    type: string;
    label?: string;
    name: keyof User;
    placeholder: string;
    options?: Options[];
    required: boolean;
    register: UseFormRegister<User>;
}