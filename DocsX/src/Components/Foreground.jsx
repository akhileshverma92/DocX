import React, { useRef } from 'react'
import Card from './Card'

function Foreground() {
    const ref = useRef(null)
   
    const data = [
        {
            desc: "The First card component with some text body",
            fileSize: "9 Mb",
            close: false,
            tag: {
                isOpen: true,
                tagTittle: "First Card",
                tagColor: "blue",
            },
        },
        {
            desc: "The Second card component with some text body",
            fileSize: "6 Mb",
            close: false,
            tag: {
                isOpen: true,
                tagTittle: "Second Card",
                tagColor: "blue",
            },
        },
        {
            desc: "The Second card component with some text body",
            fileSize: "6 Mb",
            close: false,
            tag: {
                isOpen: false,
                tagTittle: "Third Card",
                tagColor: "blue",
            },
        },
        {
            desc: "This is the Fourth card and also with green bottom",
            fileSize: "9 Mb",
            close: false,
            tag: {
                isOpen: true,
                tagTittle: "Fourth Card",
                tagColor: "green",
            },
        },
        {
            desc: "The Fifth card component with some text body",
            fileSize: "6 Mb",
            close: false,
            tag: {
                isOpen: true,
                tagTittle: "Fifth Card",
                tagColor: "green",
            },
        },
    ]

    return (
        <>  <div ref={ref} className="w-full fixed top-0 left-0 z-[3] h-full flex gap-[1rem] flex-wrap  bg-zinc-300/50">
            {data.map((item, index) => (
                <Card data={item} refrence={ref} />
            ))}

        </div>
        </>
    )
}

export default Foreground