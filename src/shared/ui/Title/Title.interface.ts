import { TitleVariantType } from "@/shared/config/types/title-variant.type";

export interface ITitle {
  children: React.ReactNode;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  variant?: TitleVariantType;
  className?: string;
}
