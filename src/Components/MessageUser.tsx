import React, { memo } from "react";

const MessageUser = memo(function MessageUser({
  message,
  i,
}: {
  message: { message: string };
  i: number;
}) {
  return (
    <div
      key={i}
      className={`border-[#999999] break-words border-2 rounded-xl self-end px-3 py-3 max-w-[80%] `}
    >
      <pre className="whitespace-pre-wrap">
        <span>{message.message}</span>
      </pre>
    </div>
  );
});

export default MessageUser;
