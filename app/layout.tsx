import type { Metadata } from "next";

import "@/_styles/globals.css";
import HeaderComponent from "@/_components/navigation/header-component";
import FooterComponent from "@/_components/navigation/footer-component";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.baysauna.co.za"),
  title: "Bay Sauna | Plettenberg Bay",
  description:
    "Wood-fired beach sauna on Central Beach, Plettenberg Bay. Move between deep heat and the Indian Ocean in one unforgettable ritual.",
  keywords:
    "sauna, beach sauna, Plettenberg Bay, Plett, wood-fired sauna, outdoor sauna, cold plunge, Indian Ocean, Central Beach, wellness, heat therapy, Plettenberg Bay activities, sauna experience, bay sauna",
  openGraph: {
    description:
      "Wood-fired beach sauna on Central Beach, Plettenberg Bay. Move between deep heat and the Indian Ocean in one unforgettable ritual.",
    type: "website",
    locale: "en_ZA",
    siteName: "Bay Sauna",
    images: [
      {
        url: "/open-graph-image.webp",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Bay Sauna",
    url: "https://www.baysauna.co.za",
  };
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className="antialiased bg-beige">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <HeaderComponent />
        {children}
        <FooterComponent />
      </body>
    </html>
  );
}
