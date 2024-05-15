// import React from 'react'

import { Slider } from "./ui/slider";

function BackgroundController() {
  return (
    <div>
      <div className="py-2">
        <label className="p-2 flex justify-between">
          Size<span>200 px</span>
        </label>
        <Slider defaultValue={[33]} max={100} step={1} />
      </div>
    </div>
  );
}

export default BackgroundController;
