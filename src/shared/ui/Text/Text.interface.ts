import { TextVariantType } from "@/shared/config/types/text-variant.type";
import { WeightType } from "@/shared/config/types/weight.type";

export interface IText {
  children: React.ReactNode;
  variant?: TextVariantType;
  weight?: WeightType;
  className?: string;
}
