'use client'
import { Image, PencilRuler, Shield } from "lucide-react";
import { useState } from "react";



// eslint-disable-next-line react/prop-types
function SideNav({selectedIndex}) {
  const menuList = [
    {
      id: 1,
      name: "Icon",
      icon: PencilRuler,
    },
    {
      id: 2,
      name: "Background",
      icon: Image,
    },
    {
      id: 3,
      name: "Upgrade",
      icon: Shield,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="border shadow-sm h-screen">
      <div>
        {menuList.map((menu, index) => (
          <h2
            onClick={() => {
                setActiveIndex(index)
                selectedIndex(index) 
            }}
            className={`p-3 text-lg px-5 my-2 flex items-center gap-3 cursor-pointer hover:bg-primary hover:text-white 
            ${
              activeIndex == index ? "bg-primary text-white" : "text-gray-500"
            }`}
            key={index}
          >
            <menu.icon className="w-5 h-5" />
            {menu.name}
          </h2>
        ))}
      </div>
    </div>
  );
}

export default SideNav;
