import React, { useRef } from "react";
import Card from "../Card/Card";

function Forground() {
  const ref = useRef(null);
  const data = [
    {
      desc: "Never give up, even in tough times. Each failure is a step closer to success ",
      filesize: "1.9mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    },
    {
      desc: "Success comes to those who work hard and stay focused, no matter how difficult the journey.",
      filesize: "3.4mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "blue" },
    },
    {
      desc: "Success comes to those who work hard and stay focused, no matter how difficult the journey.",
      filesize: "4.7mb",
      close: false,
      tag: { isOpen: false, tagTitle: "Download Now", tagColor: "green" },
    },
  ];

  return (
    <div>
      <div
        ref={ref}
        className="fixed top-0 left-0  h-full w-full z-[3] flex gap-10 p-8 "
      >
        {data.map((item, idx) => (
          <Card key={idx} item={item} reference={ref} />
        ))}
      </div>
    </div>
  );
}

export default Forground;
