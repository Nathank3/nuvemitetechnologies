import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ 
    title, 
    description, 
    keywords, 
    image = '/og-image.png', // Default image (needs to be created or mapped)
    url = 'https://nuvemite.com', 
    type = 'website',
    schema // JSON-LD Structured Data
}) => {
    const siteTitle = 'Nuvemite Technologies';
    const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;
    const metaDesc = description || "Nuvemite Technologies provides innovative software solutions like Imara LIMS, School Management Systems, and Custom ERPs to empower businesses and communities.";

    return (
        <Helmet>
            {/* Standard Metadata */}
            <title>{fullTitle}</title>
            <meta name="description" content={metaDesc} />
            <meta name="keywords" content={keywords || "Software Development, LIMS, ERP, School Management System, Kenya, Technology, Innovation, Nuvemite"} />
            <link rel="canonical" href={url} />

            {/* Open Graph / Facebook / LinkedIn (AI Agents use this) */}
            <meta property="og:type" content={type} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={metaDesc} />
            <meta property="og:image" content={image} />
            <meta property="og:url" content={url} />
            <meta property="og:site_name" content={siteTitle} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={metaDesc} />
            <meta name="twitter:image" content={image} />

            {/* JSON-LD Structured Data (Crucial for AI SEO) */}
            {schema && (
                <script type="application/ld+json">
                    {JSON.stringify(schema)}
                </script>
            )}
        </Helmet>
    );
};

export default SEO;
