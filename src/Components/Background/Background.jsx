import React from "react";

function Background() {
  return (
    <div className="h-full w-full z-[2] fixed">
      <h1 className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-[13vw] font-semibold text-gray-400">
        Docs<span className="text-green-400 -ml-2">.</span>
      </h1>
    </div>
  );
}

export default Background;
