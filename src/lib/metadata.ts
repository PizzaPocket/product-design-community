import type { Metadata } from "next";

const BASE_URL = "https://productdesign.community";

export const baseMetadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Product Design Community",
    template: "%s | Product Design Community",
  },
  description:
    "A community for product designers across Brooklyn, Los Angeles, and Singapore.",
  openGraph: {
    siteName: "Product Design Community",
    type: "website",
  },
};

export function chapterMetadata(
  title: string,
  description: string,
  path: string
): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `${BASE_URL}${path}`,
    },
  };
}
