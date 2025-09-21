import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: String[]) => {
    return twMerge(clsx(inputs));
}