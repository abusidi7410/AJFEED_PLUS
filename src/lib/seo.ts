import { useEffect } from "react";

const SITE_URL = "https://www.ajfeedplus.com.ng";
const DEFAULT_IMAGE = `${SITE_URL}/images/brand-card.png`;

interface PageMeta {
  title: string;
  description: string;
  path: string;
  image?: string;
  noindex?: boolean;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
}

function setMeta(attribute: "name" | "property", key: string, value: string) {
  let element = document.head.querySelector<HTMLMetaElement>(
    `meta[${attribute}="${key}"]`,
  );

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }

  element.setAttribute("content", value);
}

export function usePageMeta({
  title,
  description,
  path,
  image = DEFAULT_IMAGE,
  noindex = false,
  jsonLd,
}: PageMeta) {
  const jsonLdString = jsonLd ? JSON.stringify(jsonLd) : "";

  useEffect(() => {
    const canonicalUrl = `${SITE_URL}${path === "/" ? "/" : path}`;

    document.title = title;
    setMeta("name", "description", description);
    setMeta("name", "robots", noindex ? "noindex, nofollow" : "index, follow");
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    setMeta("property", "og:url", canonicalUrl);
    setMeta("property", "og:image", image);
    setMeta("property", "og:image:alt", "AJ FEED PLUS — Animal Feed Manufacturing");
    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", title);
    setMeta("name", "twitter:description", description);
    setMeta("name", "twitter:image", image);

    let canonical = document.head.querySelector<HTMLLinkElement>(
      'link[rel="canonical"]',
    );
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl;

    const existingScript = document.getElementById("page-json-ld");
    existingScript?.remove();

    if (jsonLdString) {
      const script = document.createElement("script");
      script.id = "page-json-ld";
      script.type = "application/ld+json";
      script.textContent = jsonLdString;
      document.head.appendChild(script);
    }

    return () => {
      document.getElementById("page-json-ld")?.remove();
    };
  }, [title, description, path, image, noindex, jsonLdString]);
}

export { SITE_URL };
