import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { iconList } from "@/constants/icons";
import { icons } from "lucide-react";
import { useState } from "react";

function IconList({ selectedIcon }) {
  const [openDialog, setOpenDialog] = useState(false);
  let storageValue = {};
  const ISSERVER = typeof window === "undefined";
  if (!ISSERVER) {
    storageValue = JSON.parse(localStorage.getItem("value"));
  }
  const [icon, setIcon] = useState(storageValue?.icon || "Smile");
  const Icon = ({ name, color, size, strokeWidth }) => {
    const LucidIcon = icons[name];
    if (!LucidIcon) return null;
    return <LucidIcon size={size} color={color} strokeWidth={strokeWidth} />;
  };
  return (
    <div>
      <div>
        <label>Icon</label>
        <div
          onClick={() => setOpenDialog(true)}
          className="p-3 cursor-pointer bg-gray-200 rounded-md w-[50px] h-[50px] my-2 flex items-center justify-center"
        >
          <Icon name={icon} color={"#000"} size={20} strokeWidth={2} />
        </div>
        <Dialog open={openDialog}>
          <DialogTrigger>Open</DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Pick any Icon</DialogTitle>
              <DialogDescription>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 overflow-auto h-[400px] p-6">
                  {iconList.map((icon, index) => (
                    <div
                      key={index}
                      className="border p-3 flex rounded-sm items-center justify-center cursor-pointer"
                      onClick={() => {
                        selectedIcon(icon);
                        setIcon(icon);
                        setOpenDialog(false);
                      }}
                    >
                      <Icon
                        name={icon}
                        color={"#000"}
                        size={20}
                        strokeWidth={2}
                      />
                    </div>
                  ))}
                </div>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}

export default IconList;
