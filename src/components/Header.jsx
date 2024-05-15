// import React from 'react'

import { Download } from "lucide-react";
import { Button } from "./ui/button";

function Header() {
  return (
    <div className="flex justify-between items-center p-4 shadow-sm border header-box sticky top-0">
      <img src="/logo.png" alt="logo" width={80} height={80} />
      {/* <h1 className="text-2xl font-semibold">Cologo - Online Logo Maker</h1> */}
      <Button className="flex flex-row gap-2 items-center text-white"><Download className="h-4 w-4" />Download</Button>
    </div>
  );
}

export default Header;
