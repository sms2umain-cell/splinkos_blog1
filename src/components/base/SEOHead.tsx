interface SEOHeadProps {
  title: string;
  description: string;
  keywords: string;
  canonicalUrl: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  structuredData?: object;
  geoPosition?: string;
  geoRegion?: string;
  geoPlacename?: string;
}

const SEOHead = ({
  title,
  description,
  keywords,
  canonicalUrl,
  ogTitle,
  ogDescription,
  ogImage = 'https://splinkos.online/media/ee2f31ce50a86881013b0.gif',
  ogType = 'website',
  twitterCard = 'summary_large_image',
  twitterTitle,
  twitterDescription,
  twitterImage,
  structuredData,
  geoPosition,
  geoRegion,
  geoPlacename,
}: SEOHeadProps) => {
  const currentDate = new Date().toISOString();

  useEffect(() => {
    // Set document title
    document.title = title;

    // Helper function to set or update meta tags
    const setMetaTag = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement;
      
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Helper function to set or update link tags
    const setLinkTag = (rel: string, href: string) => {
      let element = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement;
      
      if (!element) {
        element = document.createElement('link');
        element.setAttribute('rel', rel);
        document.head.appendChild(element);
      }
      element.setAttribute('href', href);
    };

    // Basic Meta Tags
    setMetaTag('description', description);
    setMetaTag('keywords', keywords);
    setMetaTag('last-modified', currentDate);
    setMetaTag('robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
    
    // Canonical URL
    setLinkTag('canonical', canonicalUrl);
    
    // Geo Tags for Local SEO
    if (geoPosition) {
      setMetaTag('geo.position', geoPosition);
      setMetaTag('ICBM', geoPosition);
    }
    if (geoRegion) setMetaTag('geo.region', geoRegion);
    if (geoPlacename) setMetaTag('geo.placename', geoPlacename);
    
    // Open Graph Tags
    setMetaTag('og:title', ogTitle || title, true);
    setMetaTag('og:description', ogDescription || description, true);
    setMetaTag('og:type', ogType, true);
    setMetaTag('og:url', canonicalUrl, true);
    setMetaTag('og:site_name', 'SPLINKOS Australia', true);
    setMetaTag('og:image', ogImage, true);
    setMetaTag('og:image:width', '1200', true);
    setMetaTag('og:image:height', '630', true);
    setMetaTag('og:locale', 'en_AU', true);
    
    // Twitter Card Tags
    setMetaTag('twitter:card', twitterCard);
    setMetaTag('twitter:title', twitterTitle || ogTitle || title);
    setMetaTag('twitter:description', twitterDescription || ogDescription || description);
    setMetaTag('twitter:image', twitterImage || ogImage);
    setMetaTag('twitter:site', '@splinkos');
    setMetaTag('twitter:creator', '@splinkos');
    
    // Additional Meta Tags
    setMetaTag('author', 'SPLINKOS Australia');
    setMetaTag('copyright', 'SPLINKOS Australia');
    setMetaTag('language', 'English');
    setMetaTag('revisit-after', '7 days');
    setMetaTag('distribution', 'global');
    setMetaTag('rating', 'general');
    
    // Structured Data
    if (structuredData) {
      let scriptElement = document.querySelector('script[type="application/ld+json"]') as HTMLScriptElement;
      
      if (!scriptElement) {
        scriptElement = document.createElement('script');
        scriptElement.setAttribute('type', 'application/ld+json');
        document.head.appendChild(scriptElement);
      }
      scriptElement.textContent = JSON.stringify(structuredData);
    }
  }, [
    title,
    description,
    keywords,
    canonicalUrl,
    ogTitle,
    ogDescription,
    ogImage,
    ogType,
    twitterCard,
    twitterTitle,
    twitterDescription,
    twitterImage,
    structuredData,
    geoPosition,
    geoRegion,
    geoPlacename,
    currentDate,
  ]);

  return null;
};

export default SEOHead;
