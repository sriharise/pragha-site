// FILE: src/components/GoogleAnalytics.tsx
// CREATE THIS NEW FILE. It will handle the Google Analytics scripts.

import Script from 'next/script';

const GoogleAnalytics = () => {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  // Don't render the script if the GA ID is not set
  if (!gaId) {
    return null;
  }

  return (
    <>
      <Script 
        strategy="afterInteractive" 
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
      />
      <Script 
        id="google-analytics" 
        strategy="afterInteractive"
      >
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gaId}');
        `}
      </Script>
    </>
  );
};

export default GoogleAnalytics;

// --- END OF FILE: src/components/GoogleAnalytics.tsx ---