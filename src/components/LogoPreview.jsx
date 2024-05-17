import { UpdateStorageContext } from "@/context/UpdateStorageContext";
import html2canvas from "html2canvas";
import { icons } from "lucide-react";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";

const BASE_URL = "https://logoexpress.tubeguruji.com";
function LogoPreview({ downloadLogo }) {
  const [storageValue, setStorageValue] = useState();
  const { updateStorage, setUpdateStorage } = useContext(UpdateStorageContext);
  useEffect(() => {
    const storageData = JSON.parse(localStorage.getItem("value"));
    setStorageValue(storageData);
  }, [updateStorage]);

  useEffect(() => {
    if (downloadLogo) {
      downloadPngLogo();
    }
  }, [downloadLogo]);

  const downloadPngLogo = () => {
    const downloadLogoDiv = document.getElementById("downloadLogoDiv");
    html2canvas(downloadLogoDiv, {
      backgroundColor: null,
    }).then((canvas) => {
      const pngImage = canvas.toDataURL("image/png");
      const downloadLink = document.createElement("a");
      var d = new Date(); // for now
      downloadLink.href = pngImage;
      downloadLink.download = `Cologo-${d.getHours()}_${d.getMinutes()}_${d.getSeconds()}.png`;
      downloadLink.click();
    });
  };

  const Icon = ({ name, color, size, strokeWidth, rotate }) => {
    const LucidIcon = icons[name];
    if (!LucidIcon) return null;
    return (
      <LucidIcon
        size={size}
        color={color}
        strokeWidth={strokeWidth}
        style={{ transform: `rotate(${rotate}deg)` }}
      />
    );
  };

  return (
    <div className="flex items-center justify-center h-screen pb-32">
      <div
        className="h-[400px] w-[400px] bg-gray-200 outline-dotted outline-gray-300"
        style={{ padding: storageValue?.backgroundPadding }}
      >
        <div
          id="downloadLogoDiv"
          className="h-full w-full flex justify-center items-center"
          style={{
            borderRadius: storageValue?.backgroundRounded,
            background: storageValue?.backgroundColor,
          }}
        >
          {storageValue?.icon?.includes(".png") ? (
            <Image
              src={BASE_URL + "/png/" + storageValue?.icon}
              alt="icon"
              width={storageValue?.iconSize}
              height={storageValue?.iconSize}
              style={{
                transform: `rotate(${storageValue?.iconRotate}deg)`,
              }}
            />
          ) : (
            <Icon
              name={storageValue?.icon}
              color={storageValue?.iconColor}
              size={storageValue?.iconSize}
              strokeWidth={storageValue?.iconStrokeWidth}
              rotate={storageValue?.iconRotate}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default LogoPreview;
