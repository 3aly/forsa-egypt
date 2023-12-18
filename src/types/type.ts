export type SectorType = {
  label: string;
};
export type BrandType = {
  sector: { title: string };
  thumbnail: string;
  label: string;
};
export type LoanType = {
  name_ar: string;
  name_en: string;
};
export type OfferType = {
  brand: {
    title: string;
    sector: {
      title_en: string;
      title_ar: string;
    };
  };
  background: string;
  title: string;
};
