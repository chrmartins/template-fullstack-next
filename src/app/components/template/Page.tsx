import { ReactNode } from "react";
import Menu from "./Menu";

interface PageProps {
  children: ReactNode;
  className?: string;
}

export default function Page({ children, className }: PageProps) {
  return (
    <div className="flex">
      <Menu />
      <main className={`flex-1 p-7 ${className} ?? ""`}>{children}</main>
    </div>
  );
}
