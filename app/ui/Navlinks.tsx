import React from 'react'

export default function Navlinks() {
    const links = [
        {
            name:"Shop",
            link:"#"
        },
        {
            name:"Collections",
            link:"#"
        },
        {
            name:"About Us",
            link:"#"
        },
        {
            name:"Contact",
            link:"#"
        },
        {
            name:"Blog",
            link:"#"
        },

    ]
  return (
    <div className='flex items-center justify-between'>
         <img src='vector.png' alt='logo' className='w-[150px] mr-10'/> 
         <div className='flex gap-20 items-center'>
         {links.map(link=>(
            <a key={link.name} href={link.link} className=' font-semibold text-[18px]'>{link.name}</a>
         ))}
         <button className='bg-black py-3 px-5 font-semibold rounded text-white hover:bg-slate-800'>Shop Now</button>
         </div>
         
    </div>
  )
}
