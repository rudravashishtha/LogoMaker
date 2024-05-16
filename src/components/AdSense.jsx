import Script from "next/script";

const AdSense = () => {
  return (
    <Script
      async
      id="adsbygoogle-init"
      strategy="afterInteractive"
      crossOrigin="anonymous"
      src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4025138726624396"
    />
  );
};

export default AdSense;
