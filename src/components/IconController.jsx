"use client";
import { Slider } from "./ui/slider";
import { useContext, useEffect, useState } from "react";
import ColorPickerController from "./ColorPickerController";
import { UpdateStorageContext } from "@/context/UpdateStorageContext";
import IconList from "./IconList";

function IconController() {
  let storageValue = {};
  const ISSERVER = typeof window === "undefined";
  if (!ISSERVER) {
    storageValue = JSON.parse(localStorage.getItem("value"));
  }
  const [size, setSize] = useState(storageValue?.iconSize || 280);
  const [rotate, setRotate] = useState(storageValue?.iconRotate || 0);
  const [color, setColor] = useState(storageValue?.iconColor || "#fff");
  const [strokeWidth, setStrokeWidth] = useState(
    storageValue?.iconStrokeWidth || 1
  );
  const { updateStorage, setUpdateStorage } = useContext(UpdateStorageContext);
  const [icon, setIcon] = useState(storageValue?.icon || "Smile");

  useEffect(() => {
    const updatedValue = {
      ...storageValue,
      iconSize: size,
      iconRotate: rotate,
      iconColor: color,
      iconStrokeWidth: strokeWidth,
      icon: icon,
    };
    setUpdateStorage(updatedValue);
    localStorage.setItem("value", JSON.stringify(updatedValue));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [size, rotate, color, strokeWidth, icon]);

  return (
    <div>
      <div className="pb-32">
        <IconList selectedIcon={(icon) => setIcon(icon)} />
        <div className="py-2">
          <label className="p-2 flex justify-between">
            Size<span>{size}px</span>
          </label>
          <Slider
            defaultValue={[size]}
            max={300}
            min={20}
            step={1}
            onValueChange={(event) => setSize(event[0])}
            className="cursor-pointer"
          />
        </div>
        <div className="py-2">
          <label className="p-2 flex justify-between">
            Rotate<span>{rotate}°</span>
          </label>
          <Slider
            defaultValue={[rotate]}
            max={360}
            step={1}
            onValueChange={(event) => setRotate(event[0])}
            className="cursor-pointer"
          />
        </div>
        {storageValue?.icon?.includes(".png") ? null : (
          <>
            <div className="py-2">
              <label className="p-2 flex justify-between">
                Stroke<span>{strokeWidth}px</span>
              </label>
              <Slider
                defaultValue={[strokeWidth]}
                max={4}
                min={1}
                step={0.2}
                onValueChange={(event) => setStrokeWidth(event[0])}
                className="cursor-pointer"
              />
            </div>
            <div className="py-2">
              <label className="p-2 flex justify-between">Icon Color</label>
              <ColorPickerController
                hideController={true}
                selectedColor={(color) => setColor(color)}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default IconController;
