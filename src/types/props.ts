import { Dispatch, SetStateAction } from "react";
import { BrandType, LoanType, OfferType, SectorType } from "./type";
import {
  ImageBackground,
  ImageBackgroundProps,
  ImageSourcePropType,
} from "react-native";
import { ImageProps } from "react-native-svg";

export type HeaderProps = {
  showSearch?: boolean;
  title?: string;
};
export type SectorsProps = {
  isLoading?: boolean;
  sectors: Array<SectorType>;
  activeIndex: { index: number; label: string };
  setActiveIndex: Dispatch<SetStateAction<{ index: number; label: string }>>;
};
export type SectorProps = {
  item: SectorType;
  index: number;
  isActive: boolean;
  handleItemPress: (index: number, label: string) => void;
};
export type BrandsProps = {
  brands: Array<BrandType>;
  activeCategory: string;
  isLoading?: boolean;
};
export type BrandProps = {
  item: BrandType;
  index: number;
};
export type AdditionalLoansProps = {
  loans: Array<LoanType>;
  isLoading?: boolean;
};
export type LoanProps = {
  item: LoanType;
  index: number;
};
export type OffersProps = {
  offers: Array<OfferType>;
  isLoading: boolean;
};
export type OfferProps = {
  item: OfferType;
  index: number;
};
export type SharableProps = {
  toShare: string;
  title: string;
};
export type ProfileCardProps = {
  pic: ImageSourcePropType;
  name: string;
};
