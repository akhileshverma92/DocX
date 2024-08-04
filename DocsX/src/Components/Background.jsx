import React from 'react'

function Background() {
    const done =()=>{
        console.log("done");
    }
    return (
        <>
            <div className="w-full h-screen fixed z-[2]">
                <div className="absolute top-[5%] w-full py-10 flex justify-center text-white text-xl font-semibold"> Documents</div>

                <h1 className=' absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] text-[12vw] leading-none tracking-tighter font-semibold  text-zinc-600'>DocX</h1>
            </div>

        </>
    )
}

export default Background