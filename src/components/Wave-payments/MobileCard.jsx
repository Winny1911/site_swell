import React from "react";

const MobileCard = ({ title, items, imageSrc, imagePosition = "right" }) => {
  return (
    <div
      className={`flex flex-col w-[20rem] md:flex-row md:w-[489px] items-center gap-3 px-5 py-3 mb-6 rounded-2xl bg-white 
        shadow-[1px_6px_7.4px_rgba(0,0,0,0.25)] text-[#29ABE2] 
        ${imagePosition === "left" ? "justify-start" : "justify-end"}`}
    >
      {/* Image (left or right based on imagePosition prop) */}
      {imageSrc && imagePosition === "left" && (
        <img
          src={imageSrc}
          alt="card image"
          className="img-fluid"
        />
      )}

      <div className="flex-1 flex flex-col">
        {/* Title */}
        <div className="font-bold mb-1.5">{title}</div>
        {/* List of items */}
        <ul className="list-disc p-0 m-0 w-[261px]">
          {items.map((item, index) => (
            <li className="text-[#29ABE2]" key={index}>{item}</li>
          ))}
        </ul>
      </div>

      {imageSrc && imagePosition === "right" && (
        <img
          src={imageSrc}
          alt="card image"
          className="img-fluid"
        />
      )}
    </div>
  );
};

export default MobileCard;
