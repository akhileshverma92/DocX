import React from 'react'
import { FaFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoCloseSharp, IoScale } from "react-icons/io5";
import { motion } from "framer-motion"



function Card({ data,refrence }) {
    return (
        <>
            <motion.div  drag dragConstraints={refrence}  whileDrag={{scale: 1.1}} dragElastic={0.3} dragTransition={{bounceStiffness: 600,bounceDamping: 20}} className=" flex-shrink-0 relative w-60 h-[15rem]  p-5 rounded-[20px]  bg-zinc-600/90 overflow-hidden">
                <FaFileAlt />
                <p className='text-sm mt-5  font-semibold leading-tight overflow-hidden '>{data.desc}</p>

                <div className="footer absolute  bottom-5 w-full h-10  left-0">
                    <div className='flex items-center justify-between px-3'>
                        <h3>{data.fileSize}</h3>
                        <span className='w-5 h-5  '>
                            {data.close ? <IoCloseSharp />
                                : <LuDownload size="1.1em" color='purple' />}
                        </span>

                    </div>
                    {data.tag.isOpen&& (<div className={`tag flex items-center justify-center w-full h-10  py-4  ${data.tag.tagColor ==="blue"? "bg-blue-600": "bg-green-600"} `}>
                        <h3 className='text-md  '>{data.tag.tagTittle}</h3>
                    </div>) }
                    
                </div>
            </motion.div>
        </>
    )
}

export default Card