interface IGroup {
  label: string;
  slug: string;
  apiSlug: string;
}

export const scoreBlockchainsGroups: IGroup[] = [
  { label: "Finance", slug: "finance", apiSlug: "score" },
  { label: "Ecology", slug: "eco", apiSlug: "eco-score" },
];
