export type SectorType = {
  label: string;
};
export type BrandType = {
  thumbnail: string;
  label: string;
};
export type LoanType = {
  name: string;
};
// export type MoviesDataType = {
//   results: MovieType[];
// };
type FlexDirection = "row" | "column";
type JustifyContent =
  | "space-between"
  | "space-around"
  | "flex-start"
  | "flex-end"
  | "center";
type AlignItems = "center" | "flex-end" | "flex-start";

export interface Layout {
  flexDirection?: FlexDirection;
  display?: "flex";
  justifyContent?: JustifyContent;
  alignItems?: AlignItems;
  flex?: number;
  flexGrow?: number;
  alignSelf?: AlignItems;
  alignContent?: AlignItems;
}
