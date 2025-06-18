import React from 'react'
import Button from './button';
const ImageClipBox = ({ src, clipClass }) => (
  <div className={clipClass}>
    <img src={src} />
  </div>
);
const Contanct = () => {
  return (
    <div id='contact' className='my-20 min-h-96 w-screen px-10' >
      <div className='relative rounded-lg bg-black py-24 text-blue-50 sm:overflow-hidden '>
        <div className='absolute -left-20 top-0 hidden w-72 h-full overflow-hidden sm:block lg:left-20 lg:w-96 ' >
<ImageClipBox
clipClass="contact-clip-path-1"
src='/img/contact-1.png'
/>
<ImageClipBox
clipClass="contact-clip-path-2 lg:translate-y-40 translate-y-60  "
src='/img/contact-2.jpg'
/>
        </div>
          <div className='absolute -top-40 left-20  w-60 sm:top-1/2 md:left-auto md:right-10 lg:top-20 lg:w-80 ' >

  <ImageClipBox
    clipClass="
      sword-man-clip-path
      scale-[0.6] md:scale-125
      rotate-0 md:-rotate-6
      transition-transform duration-300
    "
    src="/img/swordman.jpg"
  />
          </div>
          <div className='flex flex-col items-center text-center' >
            <p className=' font-general text-[20px] uppercase '>THE HUNT BEGINS </p>
<p className="special-font leading-tight mt-10 w-full font-zentry text-[2rem] md:text-[4rem] text-white">
  LET'S <b>U</b>NLEASH THE <br />
  <b>N</b>EW ERA OF <br />
  <b>S</b>LAYING <b>D</b>EMONS
</p>
                 <Button  title="	AWAKEN NOW " containerClass="mt-5 hover:text-white bg-neutral-900 text-black border border-neutral-700 hover:bg-neutral-800 hover:shadow-lg transition-all duration-300 px-5 py-2 rounded-xl" />
          </div>
      </div>
    </div>
  )
}

export default Contanct
