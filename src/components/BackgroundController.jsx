import { useContext, useEffect, useState } from "react";
import { Slider } from "./ui/slider";
import ColorPickerController from "./ColorPickerController";
import { UpdateStorageContext } from "@/context/UpdateStorageContext";

function BackgroundController() {
  const storageValue = JSON.parse(localStorage.getItem("value"));
  const [rounded, setRounded] = useState(storageValue?.backgroundRounded || 0);
  const [padding, setPadding] = useState(storageValue?.backgroundPadding || 0);
  const [color, setColor] = useState(storageValue?.backgroundColor || "#000");
  const {updateStorage, setUpdateStorage} = useContext(UpdateStorageContext);

  useEffect(() => {
    const updatedValue = {
      ...storageValue,
      backgroundRounded: rounded,
      backgroundPadding: padding,
      backgroundColor: color,
    };
    setUpdateStorage(updatedValue);
    localStorage.setItem("value", JSON.stringify(updatedValue));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rounded, padding, color]);

  return (
    <div className="pb-32">
      <div className="py-2">
        <label className="p-2 flex justify-between">
          Rounded<span>{rounded}px</span>
        </label>
        <Slider
          defaultValue={[rounded]}
          max={512}
          step={1}
          onValueChange={(event) => setRounded(event[0])}
          className="cursor-pointer"
        />
      </div>
      <div className="py-2">
        <label className="p-2 flex justify-between">
          Padding<span>{padding}px</span>
        </label>
        <Slider
          defaultValue={[padding]}
          max={100}
          step={1}
          onValueChange={(event) => setPadding(event[0])}
          className="cursor-pointer"
        />
      </div>
      <div className="py-2">
        <label className="p-2 flex justify-between">Icon Color</label>
        <ColorPickerController
          hideController={false}
          selectedColor={(color) => setColor(color)}
        />
      </div>
    </div>
  );
}

export default BackgroundController;
