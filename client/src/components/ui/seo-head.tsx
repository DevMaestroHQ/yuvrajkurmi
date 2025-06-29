import { useEffect } from 'react';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  canonicalUrl?: string;
}

export default function SEOHead({
  title = "Yubraj Kurmi - Senior Full Stack Developer | Enterprise Solutions",
  description = "Senior Full Stack Developer with 5+ years building scalable enterprise applications. Proven expertise in React, TypeScript, Node.js, AWS. Delivered 99.9% uptime systems for Fortune 500 companies. Available for hire.",
  keywords = "senior full stack developer, enterprise software development, react typescript expert, scalable web applications, aws cloud architect, node.js backend developer, performance optimization, microservices architecture, ci cd pipeline, devops engineer, remote senior developer, hire full stack developer",
  ogImage = "/og-image.jpg",
  canonicalUrl = "https://yubrajkurmi.dev"
}: SEOHeadProps) {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Update meta tags
    const updateMeta = (name: string, content: string) => {
      let meta = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement;
      if (!meta) {
        meta = document.createElement('meta');
        meta.name = name;
        document.head.appendChild(meta);
      }
      meta.content = content;
    };

    const updateProperty = (property: string, content: string) => {
      let meta = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement;
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('property', property);
        document.head.appendChild(meta);
      }
      meta.content = content;
    };

    // Basic SEO meta tags
    updateMeta('description', description);
    updateMeta('keywords', keywords);
    updateMeta('author', 'Yubraj Kurmi');
    updateMeta('robots', 'index, follow');
    updateMeta('viewport', 'width=device-width, initial-scale=1.0');

    // Open Graph tags
    updateProperty('og:title', title);
    updateProperty('og:description', description);
    updateProperty('og:image', ogImage);
    updateProperty('og:url', canonicalUrl);
    updateProperty('og:type', 'website');
    updateProperty('og:site_name', 'Yubraj Kurmi Portfolio');

    // Twitter Card tags
    updateMeta('twitter:card', 'summary_large_image');
    updateMeta('twitter:title', title);
    updateMeta('twitter:description', description);
    updateMeta('twitter:image', ogImage);
    updateMeta('twitter:creator', '@yuvrajkurmi03');

    // Technical SEO
    updateMeta('theme-color', '#00ff7f');
    updateMeta('msapplication-TileColor', '#0a0a0a');

    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl;

    // JSON-LD Structured Data
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Yubraj Kurmi",
      "jobTitle": "Senior Full Stack Developer",
      "description": description,
      "url": canonicalUrl,
      "email": "developerrajir@gmail.com",
      "telephone": "+977-9824423560",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Devdaha",
        "addressRegion": "Rupandehi",
        "addressCountry": "Nepal"
      },
      "sameAs": [
        "https://github.com/DevMaestroHQ",
        "https://linkedin.com/in/yuvrajkurmi03",
        "https://yuvrajkurmi.github.com"
      ],
      "knowsAbout": [
        "React.js",
        "Next.js",
        "TypeScript",
        "Node.js",
        "AWS",
        "Docker",
        "PostgreSQL",
        "GraphQL",
        "Microservices Architecture",
        "CI/CD Pipelines",
        "Enterprise Software Development",
        "Performance Optimization",
        "DevOps",
        "Cloud Architecture"
      ],
      "hasOccupation": {
        "@type": "Occupation",
        "name": "Software Developer",
        "occupationLocation": {
          "@type": "Country",
          "name": "Nepal"
        },
        "skills": "React, Next.js, Python, JavaScript, TypeScript, Node.js, React Native, MongoDB, Firebase"
      }
    };

    let scriptTag = document.querySelector('#structured-data') as HTMLScriptElement;
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = 'structured-data';
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(structuredData);

  }, [title, description, keywords, ogImage, canonicalUrl]);

  return null;
}