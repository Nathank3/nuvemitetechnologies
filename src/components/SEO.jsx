import React, { useEffect } from 'react';

const SEO = ({ 
    title, 
    description, 
    keywords, 
    image = '/og-image.png', 
    url = 'https://nuvemite.com', 
    type = 'website',
    schema 
}) => {
    const siteTitle = 'Nuvemite Technologies';
    const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;
    const metaDesc = description || "Nuvemite Technologies provides innovative software solutions like Imara LIMS, School Management Systems, and Custom ERPs.";

    useEffect(() => {
        // 1. Update Title
        document.title = fullTitle;

        // 2. Helper to update/create meta tags
        const updateMeta = (name, content, attr = 'name') => {
            let element = document.querySelector(`meta[${attr}="${name}"]`);
            if (!element) {
                element = document.createElement('meta');
                element.setAttribute(attr, name);
                document.head.appendChild(element);
            }
            element.setAttribute('content', content);
        };

        // 3. Update Standard Meta
        updateMeta('description', metaDesc);
        updateMeta('keywords', keywords || "Software Development, LIMS, ERP, Kenya");

        // 4. Update Open Graph
        updateMeta('og:type', type, 'property');
        updateMeta('og:title', fullTitle, 'property');
        updateMeta('og:description', metaDesc, 'property');
        updateMeta('og:image', image, 'property');
        updateMeta('og:url', url, 'property');
        updateMeta('og:site_name', siteTitle, 'property');

        // 5. Update Twitter
        updateMeta('twitter:card', 'summary_large_image');
        updateMeta('twitter:title', fullTitle);
        updateMeta('twitter:description', metaDesc);
        updateMeta('twitter:image', image);

        // 6. Inject JSON-LD
        if (schema) {
            let script = document.querySelector('#seo-json-ld');
            if (!script) {
                script = document.createElement('script');
                script.id = 'seo-json-ld';
                script.type = 'application/ld+json';
                document.head.appendChild(script);
            }
            script.text = JSON.stringify(schema);
        }

        // Cleanup: We don't strictly need to remove them on unmount for this simple app, 
        // as the next page will overwrite them.

    }, [fullTitle, metaDesc, keywords, image, url, type, schema]);

    return null; // This component renders nothing visually
};

export default SEO;
