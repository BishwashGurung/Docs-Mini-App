"use client"
import React, { useRef } from 'react'
import Card from './card'

const Foreground = () => {
    const ref = useRef(null);
    const data = [
        {
            id:0,
            desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. In, dolorum reiciendis.", 
            filesize:".4mb", 
            close: false,
            tag:{
                isOpen: false,
                tagTitle:"Download Now",
                tagColor:"Green"
            }
        },
        {
            id:1,
            desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. In, dolorum reiciendis.", 
            filesize:".9mb", 
            close: true,
            tag:{
                isOpen: false,
                tagTitle:"Download Now",
                tagColor:"Green"
            }
        },
        {
            id:2,
            desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. In, dolorum reiciendis.", 
            filesize:".4mb", 
            close: true,
            tag:{
                    isOpen: true,
                    tagTitle:"Upload",
                    tagColor:"Green"
            }
        },
        {
            id:3,
            desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. In, dolorum reiciendis.", 
            filesize:".9mb", 
            close: false,
            tag:{
                    isOpen: true,
                    tagTitle:"Download Now",
                    tagColor:"Blue"
            }
        }
    ];
  return (
    <div ref={ref} className='fixed top-0 left-0 p-8 z-[3] w-full h-full flex gap-5 flex-wrap'>
        {data.map((item, index)=>(
            <Card key={item.id} data={item} reference={ref}/>
        ))}
    </div>
  )
}

export default Foreground