"use client";
import BackgroundController from "@/components/BackgroundController";
import Header from "@/components/Header";
import IconController from "@/components/IconController";
import LogoPreview from "@/components/LogoPreview";
import SideNav from "@/components/SideNav";
import { UpdateStorageContext } from "@/context/UpdateStorageContext";
import Script from "next/script";
import { useState } from "react";

<Script
  id="adsbygoogle-init"
  strategy="afterInteractive"
  crossOrigin="anonymous"
  src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4025138726624396"
/>;

export default function Home() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [updateStorage, setUpdateStorage] = useState({});
  return (
    <UpdateStorageContext.Provider value={{updateStorage, setUpdateStorage}}>
      <div>
        <Header />
        <div className="w-64 fixed">
          <SideNav selectedIndex={(value) => setSelectedIndex(value)} />
        </div>
        <div className="w-[80vw] ml-64 grid grid-cols-1 md:grid-cols-6 fixed">
          <div className="md:col-span-2 border h-screen shadow-sm p-5 overflow-auto">
            {selectedIndex === 0 ? (
              <IconController />
            ) : (
              <BackgroundController />
            )}
          </div>
          <div className="md:col-span-4">
            <LogoPreview />
          </div>
          {/* <div className="bg-blue-100 md:col-span-1">Ads Banner</div> */}
        </div>
      </div>
    </UpdateStorageContext.Provider>
  );
}
