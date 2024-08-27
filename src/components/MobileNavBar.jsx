import React from 'react'
import Content from '../NavContent/Content'
import { NavLink } from 'react-router-dom'
function MobileNavBar() {
  return (
    <section className='md:hidden bg-black/80 bg-opacity-500 z-50 bottom-0 fixed w-full h-12'>
      
      <div className=' flex justify-around  items-center h-full'>
                 {Content.map((item,index)=>(
                    <NavLink 
                      to={item.href}
                        key={item.label+ "-mobileNavBar"}
                        className={({isActive})=>`${isActive ? 'text-white' : 'text-slate-300'} px-4 h-full flex flex-col justify-center items-center`}
                    >
                        <div className='text-xl'>{item.icon}</div>
                        <p className='text-sm'>{item.label}</p>
                    </NavLink>
                 ))}
      </div>
    </section>
  )
}

export default MobileNavBar
