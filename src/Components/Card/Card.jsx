import React from "react";
import { FaFileAlt } from "react-icons/fa";
import { BsDownload } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";
function Card({ item, reference }) {
  const { desc, filesize, close, tag } = item;
  return (
    <div>
      <motion.div
        drag
        dragConstraints={reference}
        whileDrag={{ scale: 1.2 }}
        className="w-48 h-60 bg-slate-200/40  rounded-[20px] text-white px-4 py-8 relative overflow-hidden "
      >
        <FaFileAlt />
        <p className="leading-tight mt-3">{desc}</p>
        <div className="footer   absolute right-0 left-0 bottom-0">
          <div className="flex items-center justify-between  gap-[70px] py-3 px-4">
            <h1>{filesize}</h1>
            <span className="flex justify-between items-center h-7 w-7 rounded-full cursor-pointer bg-zinc-400 p-2">
              {close ? <IoMdClose /> : <BsDownload />}
            </span>
          </div>
          {tag.isOpen ? (
            <div
              className={`w-full h-10 ${
                tag.tagColor === "blue" ? "bg-blue-500" : "bg-green-500"
              } flex justify-center items-center text-sm text-white font-semibold`}
            >
              <h4>Download Now</h4>
            </div>
          ) : null}
        </div>
      </motion.div>
    </div>
  );
}

export default Card;
