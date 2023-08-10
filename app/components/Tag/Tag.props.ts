import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface TagProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    size: 'sm' | 'base' | 'md';
    className?: string,
    color?: 'ghost' | 'red' | 'gray' | 'green' | 'primary';
    href?: string;
    children: ReactNode;
}