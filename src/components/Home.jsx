import SEO from './SEO';

const Home = () => {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Nuvemite Technologies",
    "url": "https://nuvemite.com",
    "logo": "https://nuvemite.com/logo.png",
    "description": "Nuvemite Technologies is a leading software development company in Kenya, specializing in LIMS, ERP, and School Management Systems.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Jenald Plaza, 1st Floor",
      "addressLocality": "Ruiru",
      "addressRegion": "Kiambu",
      "postalCode": "00232",
      "addressCountry": "KE"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+254-712-984-364",
      "contactType": "customer service",
      "areaServed": ["KE", "Global"],
      "availableLanguage": ["English", "Swahili"]
    },
    "sameAs": [
      "https://www.linkedin.com/company/nuvemite",
      "https://twitter.com/nuvemite",
      "https://www.facebook.com/nuvemite"
    ]
  };

  return (
    <>
      <SEO 
        title="Home" 
        description="Nuvemite Technologies delivers cutting-edge software solutions including Imara LIMS, School Management Systems, and Custom ERPs for businesses in Kenya and beyond."
        keywords="Software Development Kenya, LIMS, School Management System, ERP, Nuvemite, Tech Company Ruiru, Mobile Apps, Web Design"
        schema={orgSchema}
      />
      <HeroCarousel />
      <ClientTrustBar />
      <CompanyIntro />
      <ProductTeaser />
      <ServicesTeaser />
      
    </>
  );
};

export default Home;
