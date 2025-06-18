import React, { useRef } from 'react'
import AnimatedTitle from './Animatedtitle'
import gsap from 'gsap'
import Roundedcorner from './Roundedcorner'
import Button from './button'

const Story = () => {
    const frameRef=useRef('null')
 const handleMouseMove = (e) => {const { clientX, clientY } = e;
    const element = frameRef.current;

    if (!element) return;

    const rect = element.getBoundingClientRect();
    const xPos = clientX - rect.left;
    const yPos = clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((yPos - centerY) / centerY) * -10;
    const rotateY = ((xPos - centerX) / centerX) * 10;

    gsap.to(element, {
      duration: 0.3,
      rotateX,
      rotateY,
      transformPerspective: 500,
      ease: "power1.inOut",
    });}
  const handleMouseLeave = () => { const element = frameRef.current;

    if (element) {
      gsap.to(element, {
        duration: 0.3,
        rotateX: 0,
        rotateY: 0,
        ease: "power1.inOut",
      });
    }}
  return (
 <section id='story' className='min-h-dvh  w-screen bg-black text-blue-50' > 
      <div className="flex size-full flex-col items-center py-10 pb-24">
        <p className='font-general tracking-wide text-sm uppercase md:text-[15px]'>WITHIN THE SHADOWS, A BLADE AWAITS</p>
        <div className='relative size-full' >
<AnimatedTitle
  title="THE LEGEND OF <br /> THE DEMON SLAYERS"
sectionId='#story'
containerClass='mt-5 pointer-events-none mix-blend-difference relative z-10'
/> 

<div className='story-img-container' >
<div className='story-img-mask' >
<div className='story-img-content' >  
<img onMouseLeave={handleMouseLeave } onMouseUp={handleMouseLeave }  onMouseEnter={handleMouseLeave} onMouseMove={handleMouseMove } ref={frameRef} src="/img/entrance.jpeg    " alt="entance" className='object-contain' />

</div>
</div>
<Roundedcorner/>
</div>
        </div>
        <div className='-mt-80 flex w-full justify-center md:-mt-64 md:me-44 md:justify-end'>
<div className='flex w-fit items-center h-full flex-col md:items-start' >
<p className='mt-3 max-w-sm text-center font-display text-violet-50 md:text-start'> In a world where darkness rules the night, only the chosen rise — blades drawn, hearts burning, demons lurking.</p>
<Button
  id="realm-button"
  title="Enter the Realm"
  containerClass="mt-5 hover:text-white bg-neutral-900 text-black border border-neutral-700 hover:bg-neutral-800 hover:shadow-lg transition-all duration-300 px-5 py-2 rounded-xl"
/>

</div>
        </div>
        </div>
 </section>
  )
}

export default Story
