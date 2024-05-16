import { UpdateStorageContext } from "@/context/UpdateStorageContext";
import { icons } from "lucide-react";
import React, { useContext, useEffect, useState } from "react";

function LogoPreview() {
  const [storageValue, setStorageValue] = useState();
  const { updateStorage, setUpdateStorage } = useContext(UpdateStorageContext);
  useEffect(() => {
    const storageData = JSON.parse(localStorage.getItem("value"));
    setStorageValue(storageData);
  }, [updateStorage]);

  const Icon = ({ name, color, size, strokeWidth, rotate }) => {
    const LucidIcon = icons[name];
    if (!LucidIcon) return null;
    return <LucidIcon size={size} color={color} strokeWidth={strokeWidth}
        style={{ transform: `rotate(${rotate}deg)` }}
     />;
  };

  return (
    <div className="flex items-center justify-center h-screen pb-32">
      <div
        className="h-[400px] w-[400px] bg-gray-200 outline-dotted outline-gray-300"
        style={{ padding: storageValue?.backgroundPadding }}
      >
        <div
          className="h-full w-full flex justify-center items-center"
          style={{
            borderRadius: storageValue?.backgroundRounded,
            background: storageValue?.backgroundColor,
          }}
        >
          <Icon
            name={storageValue?.icon}
            color={storageValue?.iconColor}
            size={storageValue?.iconSize}
            strokeWidth={storageValue?.iconStrokeWidth}
            rotate={storageValue?.iconRotate}
          />
        </div>
      </div>
    </div>
  );
}

export default LogoPreview;
