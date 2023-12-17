import { Dispatch, SetStateAction } from "react";
import { BrandType, LoanType, SectorType } from ".";

export type HeaderProps = {
  showSearch?: boolean;
  title?: string;
};
export type SectorsProps = {
  sectors: Array<SectorType>;
  activeIndex: { index: number; label: string };
  setActiveIndex: Dispatch<SetStateAction<{ index: number; label: string }>>;
};
export type SectorProps = {
  item: SectorType;
  index: number;
  isActive: boolean;
  handleItemPress: () => {};
};
export type BrandsProps = {
  brands: Array<BrandType>;
  activeCategory: string;
};
export type BrandProps = {
  item: BrandType;
  index: number;
};
export type AdditionalLoansProps = {
  loans: Array<LoanType>;
};
export type LoanProps = {
  item: LoanType;
  index: number;
};
export type OffersProps = {
  loans: Array<LoanType>;
};
export type SharableProps = {
  toShare: string;
  title: string;
};
// export interface MovieModalProps extends MoviePosterProps {
//   open: boolean;
//   setOpen: Dispatch<SetStateAction<boolean>>;
// }

// export type MoviesProps = {
//   moviesData: Array<MoviesDataType>;
// };

// export type SectionTitleProps = {
//   title: string;
// };
// export type ImdbRatingProps = {
//   rating: number;
// };

export type SearchBarProps = {
  title?: string;
  setSearchTerm: Dispatch<SetStateAction<string>>;
};
export type NavBarProps = {
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
};
export type LoaderProps = {
  isLoading?: boolean;
};
