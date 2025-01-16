import { IconType } from "react-icons";

export interface NavLink {
    linkText: string;
    href: string;
    active: boolean;
}

export type IconMap = {
    [key: string]: IconType;
};