import React, { useMemo, useRef, useState } from "react";
import autoAnimate from "@formkit/auto-animate";
import { useEffect } from "react";
import Image from "next/image";
import MessageAi from "./MessageAi";
import MessageUser from "./MessageUser";
import Loading from "./Loading";

const ChatBody = ({ data, loading }: { data: any; loading: boolean }) => {
  const aiStyle =
    "bg-white bg-opacity-40 backdrop-blur-lg dropshadow-md mr-auto";

  const parent = useRef(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  // only for aut animations
  useEffect(() => {
    parent.current && autoAnimate(parent.current);
  }, [parent]);

  //for scrolling bottom
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [data]);
  const memoizedList = useMemo(() => data, [data]);
  return (
    <div className="flex flex-col gap-4" ref={parent}>
      {memoizedList ? (
        memoizedList.map((message: any, i: number) => {
          if (message.sender === "ai") {
            return <MessageAi message={message} i={i} />;
          }
          return <MessageUser message={message} i={i} />;
        })
      ) : (
        <div></div>
      )}
      {loading ? <Loading /> : <></>}
      <div ref={bottomRef} className="h-3"></div>
    </div>
  );
};

export default React.memo(ChatBody);
