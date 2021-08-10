import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface TagProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  size: "medium" | "small";
  color: "ghost" | "red" | "gray" | "green" | "primary";
  children: ReactNode;
  href?: string;
}
