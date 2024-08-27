import React, { useRef } from 'react';
import { GrFormPrevious ,GrFormNext } from "react-icons/gr";
import Card from "../components/Card";
export default function HorizontalCard({ data, imageURL, heading,trending,media_type }) {
    const containRef = useRef();
    const handleNext = ()=>{
        containRef.current.scrollLeft += 300
    }
    const handlePrevious = ()=>{
        containRef.current.scrollLeft -= 300
    }
    return (
        <>
            <div className="container mx-auto px-3 my-10">
                <h2 className="text-xl md:text-3xl text-white font-bold text-pretty mb-3">
                    {heading}
                </h2>

                <div className=" relative ">
                    <div ref={containRef} className="grid grid-cols-[repeat(auto-fit,230px)] grid-flow-col overflow-hidden scroll-smooth relative z-10 overflow-x-scroll gap-6 transition-all scrollBar">
                        {data.map((item, index) => (
                            <Card key={index + heading + "CardsTrending"} data={item} imageURL={imageURL} index={index} trending={trending} media_type={media_type} />
                        ))}
                    </div>
                    <div className='absolute top-0 hidden lg:flex justify-between items-center w-full h-full'>
                        <button onClick={handlePrevious} className='bg-white p-1 rounded-full text-black -ml-2 z-10'><GrFormPrevious/></button>
                        <button onClick={handleNext} className='bg-white p-1 rounded-full text-black -mr-2 z-10'><GrFormNext/></button>
                    </div>
                </div>

            </div>
        </>
    )
}