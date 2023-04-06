import { Dispatch, SetStateAction, useState } from "react";

type PropsChatInput = {
  sendMessage: Dispatch<
    SetStateAction<
      {
        sender: "ai" | "user";
        message: any;
      }[]
    >
  >;
  setLoading: Dispatch<SetStateAction<boolean>>;
};

const ChatInput = ({ sendMessage, setLoading }: PropsChatInput) => {
  const [value, setValue] = useState("");

  const handleSubmit = async () => {
    sendMessage((pre) => [...pre, { sender: "user", message: value }]);
    setLoading(true);
    if (value === "") return;

    const response = await fetch("/api/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: value,
      }),
    });

    const data = await response.json();
    if (data) {
      setLoading(false);
    }

    sendMessage((pre) => [
      ...pre,
      { sender: "ai", message: data.data.message.replace(/^\n\n/, "") },
    ]);

    setValue("");
  };
  return (
    <div
      className="w-full bg-white bg-opacity-10 max-h-40 rounded-lg px-4
  py-4 overflow-auto relative"
    >
      <textarea
        onKeyDown={(e) => {
          e.keyCode === 13 && e.shiftKey === false && handleSubmit();
        }}
        rows={1}
        className="border-0 bg-transparent outline-none w-11/12"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />

      <picture>
        <img
          onClick={handleSubmit}
          src="./send.png"
          width={20}
          alt="send-button"
          className="absolute top-4
          right-3 hover:cursor-pointer ease-in duration-100 hover:scale-125
          "
        />
      </picture>
    </div>
  );
};

export default ChatInput;
