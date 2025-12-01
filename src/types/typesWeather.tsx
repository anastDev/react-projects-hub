import type {Ref} from "react";

export type WeatherInputProps = {
    inputRef: Ref<HTMLInputElement | null>;
    searchInput: (text: string) => void;
}

export type WeatherDetailsProps = {
    temperature: number;
    description: string;
    country?: string;
    name: string;
}
