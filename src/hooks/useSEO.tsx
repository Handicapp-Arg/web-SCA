import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  lang?: string;
}

export function useSEO({ title, description, image, url, lang }: SEOProps) {
  useEffect(() => {
    if (title) {
      document.title = title;
      setMeta('og:title', title);
      setMeta('twitter:title', title);
    }
    if (description) {
      setMeta('description', description);
      setMeta('og:description', description);
      setMeta('twitter:description', description);
    }
    if (image) {
      setMeta('og:image', image);
      setMeta('twitter:image', image);
    }
    if (url) {
      setMeta('og:url', url);
      setMeta('twitter:url', url);
      setCanonical(url);
    }
    if (lang) {
      document.documentElement.lang = lang;
    }
  }, [title, description, image, url, lang]);
}

function setMeta(property: string, content: string) {
  let el = document.querySelector(`meta[name='${property}'], meta[property='${property}']`);
  if (!el) {
    el = document.createElement('meta');
    if (property.startsWith('og:') || property.startsWith('twitter:')) {
      el.setAttribute('property', property);
    } else {
      el.setAttribute('name', property);
    }
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setCanonical(url: string) {
  let link = document.querySelector("link[rel='canonical']");
  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    document.head.appendChild(link);
  }
  link.setAttribute('href', url);
}