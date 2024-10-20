import { ElementType } from "react";

export interface TitleProps {
    title: string;
    subtitle: string;
    icon: ElementType;
}

export default function Title({ title, subtitle, icon: Icon }: TitleProps) {
    return (
        <div className="flex gap-2">
            <Icon className="w-12 h-12 text-zinc-500" />
            <div className="flex flex-col">
                <h1 className="text-2xl font-bold">{title}</h1>
                <span className="text-sm text-zinc-400">{subtitle}</span>
            </div>
        </div>
    )
}