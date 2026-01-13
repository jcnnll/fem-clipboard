export interface LandingPageMeta {
  title: string;
  description: string;
  canonical?: string;
  robots?: string;
  og?: {
    title: string;
    description: string;
    type: string;
    url: string;
    site_name: string;
    image: string;
    locale: string;
  };
  twitter?: {
    card: string;
    title: string;
    description: string;
    site: string;
    creator: string;
    image: string;
    image_alt: string;
  };
  jsonLd?: Record<string, unknown>;
}
