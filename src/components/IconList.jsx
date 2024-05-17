import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { iconList } from "@/constants/icons";
import { icons } from "lucide-react";
import { useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import axios from "axios";
import Image from "next/image";

const BASE_URL = "https://logoexpress.tubeguruji.com";
function IconList({ selectedIcon }) {
  const [openDialog, setOpenDialog] = useState(false);
  let storageValue = {};
  const ISSERVER = typeof window === "undefined";
  if (!ISSERVER) {
    storageValue = JSON.parse(localStorage.getItem("value"));
  }
  const [icon, setIcon] = useState(storageValue?.icon || "Smile");
  const [pngIcons, setPngIcons] = useState([]);

  useEffect(() => {
    getPngIcons();
  }, []);

  const Icon = ({ name, color, size, strokeWidth }) => {
    const LucidIcon = icons[name];
    if (!LucidIcon) return null;
    return <LucidIcon size={size} color={color} strokeWidth={strokeWidth} />;
  };

  const getPngIcons = () => {
    axios.get(BASE_URL + "/getIcons.php").then((res) => {
      setPngIcons(res.data);
    });
  };

  return (
    <div>
      <div>
        <label>Icon</label>
        <div
          onClick={() => setOpenDialog(true)}
          className="p-3 cursor-pointer bg-gray-200 rounded-md w-[50px] h-[50px] my-2 flex items-center justify-center"
        >
          {icon.includes(".png") ? (
            <Image
              src={BASE_URL + "/png/" + icon}
              width={50}
              height={50}
              alt={icon}
            />
          ) : (
            <Icon name={icon} color={"#000"} size={20} strokeWidth={2} />
          )}
        </div>
        <Dialog open={openDialog} onOpenChange={setOpenDialog}>
          <DialogTrigger>Open</DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Pick any Icon</DialogTitle>
              <DialogDescription>
                {/* Tabs */}
                <Tabs defaultValue="icon" className="w-[400px]">
                  <TabsList>
                    <TabsTrigger value="icon">Icons</TabsTrigger>
                    <TabsTrigger value="color-icon">Colored Icons</TabsTrigger>
                  </TabsList>
                  <TabsContent value="icon">
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
                  </TabsContent>
                  <TabsContent value="color-icon">
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 overflow-auto h-[400px] p-6">
                      {pngIcons.map((icon, index) => (
                        <div
                          key={index}
                          className="border p-3 flex rounded-sm items-center justify-center cursor-pointer"
                          onClick={() => {
                            selectedIcon(icon);
                            setIcon(icon);
                            setOpenDialog(false);
                          }}
                        >
                          <Image
                            src={BASE_URL + "/png/" + icon}
                            width={50}
                            height={50}
                            alt={icon}
                          />
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                </Tabs>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}

export default IconList;
