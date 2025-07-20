import type { ColorType } from "./color.type";
import type { SizeType } from "./size.type";
import type { WeightType } from "./weight.type";

export type TextType = {
  children: React.ReactNode;
  weight?: WeightType;
  size?: SizeType;
  color?: ColorType;
  className?: string;
} & React.HTMLAttributes<HTMLHeadingElement | HTMLParagraphElement>;
