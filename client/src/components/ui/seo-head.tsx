import { useEffect } from 'react';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  canonicalUrl?: string;
  pageType?: 'website' | 'article' | 'profile';
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
}

export default function SEOHead({
  title = "Yubraj Kurmi - Full Stack Developer | Modern Web Solutions & Expert Development",
  description = "Full Stack Developer with 2+ years experience creating scalable web applications. Expert in React, TypeScript, Node.js, and modern web technologies. Available for freelance projects and consultations.",
  keywords = "yubraj kurmi, full stack developer, react developer, nodejs developer, typescript expert, web development, freelance developer, nepal developer, modern web solutions, responsive design, api development",
  ogImage = "https://yuvrajkurmi.github.com/og-image.jpg",
  canonicalUrl = "https://yuvrajkurmi.github.com",
  pageType = "website",
  author = "Yubraj Kurmi",
  publishedTime,
  modifiedTime
}: SEOHeadProps) {
  useEffect(() => {
    try {
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
    updateProperty('og:image:width', '1200');
    updateProperty('og:image:height', '630');
    updateProperty('og:image:type', 'image/jpeg');
    updateProperty('og:url', canonicalUrl);
    updateProperty('og:type', pageType);
    updateProperty('og:site_name', 'Yubraj Kurmi Portfolio');
    updateProperty('og:locale', 'en_US');
    
    // Article-specific Open Graph tags
    if (pageType === 'article' && publishedTime) {
      updateProperty('article:published_time', publishedTime);
      updateProperty('article:author', author || 'Yubraj Kurmi');
      if (modifiedTime) {
        updateProperty('article:modified_time', modifiedTime);
      }
    }

    // Twitter Card tags
    updateMeta('twitter:card', 'summary_large_image');
    updateMeta('twitter:title', title);
    updateMeta('twitter:description', description);
    updateMeta('twitter:image', ogImage);
    updateMeta('twitter:creator', '@yuvrajkurmi03');

    // Technical SEO
    updateMeta('theme-color', '#3B82F6');
    updateMeta('msapplication-TileColor', '#1E40AF');
    updateMeta('application-name', 'Yubraj Kurmi Portfolio');
    updateMeta('apple-mobile-web-app-title', 'YK Portfolio');
    updateMeta('format-detection', 'telephone=no');
    updateMeta('mobile-web-app-capable', 'yes');
    
    // Language and location
    updateMeta('geo.region', 'NP-P3');
    updateMeta('geo.placename', 'Devdaha, Rupandehi');
    updateMeta('geo.position', '27.5167;83.4500');
    updateMeta('ICBM', '27.5167, 83.4500');

    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl;

    // Enhanced JSON-LD Structured Data
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Yubraj Kurmi",
      "jobTitle": "Full Stack Developer",
      "description": description,
      "url": canonicalUrl,
      "email": "developerrajir@gmail.com",
      "telephone": "+977-98XXXXXXXX",
      "image": ogImage,
      "birthPlace": {
        "@type": "Place",
        "name": "Devdaha, Rupandehi, Nepal"
      },
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Devdaha",
        "addressRegion": "Rupandehi",
        "addressCountry": "Nepal",
        "postalCode": "32900"
      },
      "sameAs": [
        "https://github.com/DevMaestroHQ",
        "https://linkedin.com/in/yuvrajkurmi03",
        "https://yuvrajkurmi.github.com"
      ],
      "knowsAbout": [
        "React.js",
        "TypeScript", 
        "Node.js",
        "Express.js",
        "MongoDB",
        "PostgreSQL",
        "JavaScript",
        "HTML5",
        "CSS3",
        "Responsive Web Design",
        "API Development",
        "Git Version Control",
        "Frontend Development",
        "Backend Development",
        "Full Stack Development"
      ],
      "hasOccupation": {
        "@type": "Occupation",
        "name": "Full Stack Developer",
        "occupationLocation": {
          "@type": "Country",
          "name": "Nepal"
        },
        "skills": "React, TypeScript, Node.js, Express.js, MongoDB, PostgreSQL, JavaScript, Frontend Development, Backend Development",
        "experienceRequirements": "2+ years experience",
        "responsibilities": "Web application development, API development, database design, frontend development, backend development"
      },
      "alumniOf": {
        "@type": "EducationalOrganization",
        "name": "Bhairahawa Multiple Campus",
        "location": "Rupandehi, Nepal"
      },
      "offers": {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Web Development Services",
          "description": "Professional full-stack web development services including frontend, backend, and database development"
        },
        "availability": "Available",
        "areaServed": "Worldwide"
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

    // Additional structured data for enhanced SEO
    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": canonicalUrl
        },
        {
          "@type": "ListItem", 
          "position": 2,
          "name": title.split(' - ')[0],
          "item": canonicalUrl
        }
      ]
    };

    // FAQ Schema for better search visibility
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What technologies does Yubraj Kurmi specialize in?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yubraj specializes in React, TypeScript, Node.js, Express.js, MongoDB, PostgreSQL, and modern web development technologies. He has 2+ years of experience building scalable web applications."
          }
        },
        {
          "@type": "Question",
          "name": "Is Yubraj Kurmi available for freelance projects?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, Yubraj is actively available for freelance web development projects, consultations, and collaborations. Contact him through the contact form for project discussions."
          }
        },
        {
          "@type": "Question",
          "name": "Where is Yubraj Kurmi located?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yubraj is based in Devdaha, Rupandehi, Nepal, and works with clients worldwide remotely."
          }
        }
      ]
    };

    // Add breadcrumb schema
    let breadcrumbScript = document.querySelector('#breadcrumb-schema') as HTMLScriptElement;
    if (!breadcrumbScript) {
      breadcrumbScript = document.createElement('script');
      breadcrumbScript.id = 'breadcrumb-schema';
      breadcrumbScript.type = 'application/ld+json';
      document.head.appendChild(breadcrumbScript);
    }
    breadcrumbScript.textContent = JSON.stringify(breadcrumbSchema);

    // Add FAQ schema
    let faqScript = document.querySelector('#faq-schema') as HTMLScriptElement;
    if (!faqScript) {
      faqScript = document.createElement('script');
      faqScript.id = 'faq-schema';
      faqScript.type = 'application/ld+json';
      document.head.appendChild(faqScript);
    }
    faqScript.textContent = JSON.stringify(faqSchema);

    } catch (error) {
      console.error('SEO Head error:', error);
    }
  }, [title, description, keywords, ogImage, canonicalUrl, pageType, author, publishedTime, modifiedTime]);

  return null;
}