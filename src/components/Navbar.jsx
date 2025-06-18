import React, { useRef, useState,useEffect } from 'react'
import Button from './button'
import { TiLocationArrow } from 'react-icons/ti'
import {useWindowScroll} from 'react-use';
import gsap  from 'gsap';
const navItems = ["Corps", "Slayers", "Missions", "About", "Contact"];
const Navbar = () => {
      const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
    const { y: currentScrollY } = useWindowScroll();
      const [isaudioPlaying,setisaudioPlaying]=useState(false)
    const [isindicatorActive,setisindicatorActive]=useState(false)
    const navContainerRef=useRef(null)
    const audioelementref=useRef(null)

      useEffect(() => {
    if (currentScrollY === 0) {
      setIsNavVisible(true);
      navContainerRef.current.classList.remove("floating-nav");
    } else if (currentScrollY > lastScrollY) {
      
      setIsNavVisible(false);
      navContainerRef.current.classList.add("floating-nav");
    } else if (currentScrollY < lastScrollY) {
     
      setIsNavVisible(true);
      navContainerRef.current.classList.add("floating-nav");
    }

    setLastScrollY(currentScrollY);
  }, [currentScrollY, lastScrollY]);
    useEffect(() => {
    gsap.to(navContainerRef.current, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      duration: 0.2,
    });
  }, [isNavVisible]);

  
    const toggleaudio =()=>{
setisaudioPlaying((prev)=>!prev)
setisindicatorActive((prev)=>!prev)
    }
    useEffect(() => {
   if(isaudioPlaying){
    audioelementref.current.play()
   }else{
    audioelementref.current.pause()
   }
    
     
    }, [isaudioPlaying])
    
  return (
    <div ref={navContainerRef} className='fixed inset-x-0 h-16 border-none sm:inset-x-6 duration-700 top-4 z-50 transition-all' >
        <header className='absolute top-1/2 w-full -translate-y-1/2 ' >
        <nav className='flex size-full p-4 items-center justify-between' > 
<div className='flex gap-7 items-center' >
    <img src="/img/logo.png" alt="logo"  className='w-13 h-15 '  />
    <Button
    id='product-button'
    title="Artifacts"
    rightIcon={<TiLocationArrow/>}
     containerClass="bg-[#0a0a0a] hover:bg-[#131313] hover:text-white text-[#9be2ff] border border-[#1e90ff40] md:flex hidden items-center justify-center gap-1 px-4 py-2 rounded-full transition duration-300 shadow-[0_0_8px_#1e90ff20]"
    />
</div>
<div className='flex h-full items-center' >
    <div className='hidden md:block' >
{navItems.map((item, index) => (
    <a
    
      key={index}
      href={`#${item.toLowerCase()}`}
      className="nav-hover-btn"
    >
      {item}
    </a>
))}
    </div>
    <button className='ml-10 items-center flex space-x-0.5' onClick={toggleaudio} >
        <audio ref={audioelementref} className='hidden' src="/audio/loop.mp3" loop/>


  {[1, 2, 3, 4].map((bar) => {
  return (
    <div
      key={bar}
      className={`indicator-line ${isindicatorActive ? 'active' : ''} cursor-pointer`}
      style={{ animationDelay: `${bar * 0.1}s` }}
    />
  );
})}
       
        </button>

</div>
        </nav>
        </header>
  
    </div>
  )
}

export default Navbar
