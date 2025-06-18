import { Children, useRef ,useState } from "react";
import { TiLocationArrow } from "react-icons/ti";


const Bentotilt=({children,className=""})=>{
  const [transformStyle, settransformStyle] = useState("")
  const itemref =useRef()
  const handlemousemove = (e)=>{
    if(!itemref.current) return

     const { left, top, width, height } =
      itemref.current.getBoundingClientRect();

    const relativeX = (event.clientX - left) / width;
    const relativeY = (event.clientY - top) / height;

    const tiltX = (relativeY - 0.5) * 5;
    const tiltY = (relativeX - 0.5) * -5;

    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(.98, .98, .98)`;
    settransformStyle(newTransform);
  }
  const handlemouseleave = (e)=>{
    settransformStyle("")
  }
  return (

    <div className={className} ref={itemref} onMouseMove={handlemousemove} onMouseLeave={handlemouseleave}  style={{transform:transformStyle}} >  
      {children}
    </div>
  )
}
const Bentocard = ({ src, title, description }) => {
  return (
    <div className="relative size-full">
      
      <video
        src={src}
        loop
        muted
        autoPlay
        className="absolute left-0 top-0 size-full object-cover object-center"
      />

      <div className="relative z-10 flex flex-col p-5 size-full justify-between text-blue-50">
        <h1 className="bento-title special-font">
          {title}
        </h1>
        {description && (
          <p className="mt-3 max-w-64 text-xs md:text-base">
            {description}
          </p>
        )}
      </div>
    </div>
  );
};

const Features = () => {
  return (
<section className="bg-black pb-52" >
    <div className="container mx-auto px-3 md:px-10 " >
<div className="px-5 py-32" >
<p className="font-display  text-lg text-blue-50" >  A world veiled in shadows. A destiny forged in flame.</p>

<p className="max-w-md font-display text-lg text-blue-50 opacity-50" >
   In an era where demons rule the night, only the blade of the brave can bring back the light. 
  Embrace your fate, awaken your strength, and step into a realm where every strike echoes through legend.
</p>
</div>

 <Bentotilt className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
  <Bentocard
    src="/videos/featuresss-1.mp4"
    title={
      <>Ete<b>r</b>nal Flame</>
    }
    description="Awaken the power within as you walk the path of the Flame Hashira — forged in fire, guided by honor, destined to burn away the darkness."
  />

    </Bentotilt>
    <div className="grid h-[135vh] grid-cols-2 grid-rows-3 gap-7" >
<Bentotilt className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2" >

<Bentocard
  src="videos/features-2.mp4"
  title={<>Season <b>1</b>: The Beginning</>}
  description="Follow Tanjiro Kamado’s journey from tragedy to purpose as he joins the Demon Slayer Corps. Witness breathtaking battles, fierce demons, and the unbreakable bond between siblings in the season that started it all."
/>
</Bentotilt>

<Bentotilt className="bento-tilt_1 row-span-1 ms-0 md:col-span-1" >
<Bentocard
  src="videos/feature-3.mp4"
  title={<>Season <b>2</b>: Entertainment Arc</>}
  description="Dive into the vibrant yet deadly Entertainment District alongside Tanjiro, Zenitsu, Inosuke, and the flamboyant Sound Hashira, Tengen Uzui. Face off against powerful Upper Rank demons in a battle that redefines strength, sacrifice, and style."
/>

</Bentotilt>
<Bentotilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0" >
  <Bentocard
  src="videos/feature-4.mp4"
  title={<>Season <b>3</b>: Swordsmith Arc</>}
  description="Venture into the hidden Swordsmith Village as Tanjiro joins forces with the Mist and Love Hashira. With ancient blades, evolving powers, and Upper Rank demons threatening all, Season 3 unveils secrets buried deep in steel and spirit."
/>
</Bentotilt>
<Bentotilt className="bento-tilt_2" >
    <div className="flex flex-col size-full justify-between bg-violet-300 p-5" >
        <h1 className="bento-title special-font max-w-64 text-black">more coming soon</h1>
        <TiLocationArrow className="m-5 scale-[5] self-end" />
    </div>
</Bentotilt>
<Bentotilt className="bento-tilt_2" >
<video src="videos/hero-3.mp4"  loop muted autoPlay className="size-full object-cover object-center" />
</Bentotilt>
    </div>
    </div>
</section>
  )
}

export default Features
