import type {UseFormRegister} from "react-hook-form";
import type {UserValues} from "@/schemas/user.schema.ts";

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
    name: keyof UserValues;
    placeholder: string;
    options?: Options[];
    required: boolean;
    register: UseFormRegister<UserValues>;
}