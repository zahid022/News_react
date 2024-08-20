import React from "react";
import Slider from "react-slick";
import { useGetPagNewsQuery } from "../store/api";
import { nanoid } from "@reduxjs/toolkit";
import { Link } from "react-router-dom";

function LazyLoad() {

    const { data } = useGetPagNewsQuery(1)

    const settings = {
        dots: true,
        lazyLoad: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 2
    };
    return (
        <div className="slider-container w-11/12 mx-auto relative">
            <Slider {...settings}>
                {data?.map(item => { 
                    return <div key={nanoid()}>
                        <div className="lg:flex lg:mb-3 lg:pt-3 hidden lg:items-center lg:justify-center">
                            <p className="px-3 text-[12px] duration-300 hover:text-[#FFA914]">{item.category_id.name}</p>
                        </div>
                        <div className="mb-3 xl:mb-5 flex justify-center px-3">
                            <p className="text-[18px] font-medium text-center">{item.title}</p>
                        </div>
                        <div className="h-72 lg:h-96 xl:h-[450px] overflow-hidden rounded-md" >
                            <Link to={`/detail/${item._id}`}>
                                <img className="w-full duration-300 hover:scale-[1.05] h-full object-cover" src={item.img} />
                            </Link>
                        </div>
                    </div>
                })}
            </Slider>
        </div>
    );
}

export default LazyLoad;
