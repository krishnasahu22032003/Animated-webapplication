import React from 'react'

const Button = ({title,id,rightIcon,leftIcon,containerClass}) => {
  return (
 
      <button id={id} className={`cursor-pointer group relative z-10 w-fit px-7 py-2 text-black rounded-xl overflow-hidden bg-violet-50 ${containerClass}`}>
   {leftIcon}
   <span className='relative incline-flex overflow-hidden text-general text-xs uppercase' > 
    <div>
        {title}
    </div>
   </span>
   {rightIcon}
      </button>

  )
}

export default Button
