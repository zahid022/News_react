import React from 'react';

const TimeDisplay = ({ isoString }) => {
    const date = new Date(isoString);

    const hours = date.getUTCHours().toString().padStart(2, '0');
    const minutes = date.getUTCMinutes().toString().padStart(2, '0');

    const formattedTime = `${hours}:${minutes}`;

    return <div className='bg-[#EFEFEF] font-bold text-[10px] py-1 px-2'>{formattedTime}</div>;
};

export default TimeDisplay;
