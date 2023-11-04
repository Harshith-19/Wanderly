import React from "react";

const SectionHeader = ({ title, subtitle }) => {
  return (
    <div>
      <span className='text-primaryLight font-bold text-xl mb-5 inline-block'>
        {subtitle}
      </span>
      <h2 className='text-primaryDark text-4xl sm:text-5xl font-bold '>
        {title}
      </h2>
    </div>
  );
};

export default SectionHeader;
