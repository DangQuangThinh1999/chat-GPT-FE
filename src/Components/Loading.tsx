import React, { memo } from "react";

const Loading = memo(function Loading() {
  const aiStyle =
    "bg-white bg-opacity-40 backdrop-blur-lg dropshadow-md mr-auto";
  return (
    <div
      className={`border-[#999999] break-words border-2 rounded-xl self-end px-3 py-3 max-w-[80%] ${aiStyle}`}
    >
      <img src="./loader.gif" alt="loader" className="w-8 m-auto" />
    </div>
  );
});

export default Loading;
