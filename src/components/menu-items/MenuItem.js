import React from "react";

const MenuItem = ({ title, imageUrl, size }) => (
    <div 
        className={`min-w-[30%] h-[240px] flex grow shrink basis-auto items-center justify-center border border-black first:mr-[7.5px] last:ml-[7.5px] mt-0 mb-[15px] mx-[7.5px] relative hover:cursor-pointer overflow-hidden ${size ? 'h-[380px]' : ''} `}
    >
        <div 
        style={{
        backgroundImage: `url(${imageUrl})`
        }}
        className="w-full absolute h-full bg-center bg-cover hover:scale-[1.1] ease-[cubic-bezier(0.25, 0.45, 0.45, 0.95)] duration-[6s]"  />``

        <div className='h-[90px] py-0 px-[25px] flex flex-col items-center justify-center border border-black bg-white opacity-70 absolute hover:opacity-[0.9] '>
            <h1 className='text-[22px] font-extrabold mb-[6px] '>{title.toUpperCase()}</h1>
            <span className='font-light text-[16px]'>SHOP NOW</span>
        </div>
    </div>
)

export default MenuItem