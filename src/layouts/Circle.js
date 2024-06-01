import React from 'react';

export default function Circle({ Img, width, height, gradientClass, onClick }) {
  return (
    <div 
      className={`bg-white rounded-full p-[2rem] cursor-pointer border-primary-${gradientClass}-start border-[20px]`}
      style={{ width, height }}
      onClick={onClick}
    >
      <img src={Img} alt="icon" className="object-contain object-center w-full h-full" />
    </div>
  );
}
