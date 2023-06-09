import React, { memo } from "react";

const MessageAi = memo(function MessageAi({
  message,
  i,
 
}: {
  message: { message: string; sender: "ai" | "user" };
  i: number;

}) {
  const aiStyle =
    "bg-white bg-opacity-40 backdrop-blur-lg dropshadow-md mr-auto";
  return (
    <div
      key={i}
      className={`border-[#999999] break-words border-2 rounded-xl self-end px-3 py-3 max-w-[80%] ${
        message.sender === "ai" && aiStyle
      }`}
    >
      
        <pre className="whitespace-pre-wrap">
          <span>{message.message}</span>
        </pre>
       
    </div>
  );
});

export default MessageAi;
